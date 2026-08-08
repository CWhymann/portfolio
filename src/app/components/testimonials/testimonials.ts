import { Component, signal } from '@angular/core';
import { Translation } from '../../core/translation';

interface Testimonial {
  key: string;
  author: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      key: '0',
      author: 'T.Schulz',
      role: 'Frontend Developer',
    },
    {
      key: '1',
      author: 'H.Janisch',
      role: 'Team Partner',
    },
    {
      key: '2',
      author: 'A. Fischer',
      role: 'Team Partner',
    },
  ];

  activeIndex = signal(1);
  displayIndex = signal(1);
  cardClickCount = signal(0);

  constructor(public translation: Translation) {}

  prev(): void {
    this.cardClickCount.set(0);
    this.activeIndex.update((i) => (i - 1 + this.testimonials.length) % this.testimonials.length);
    this.displayIndex.set(this.activeIndex());
  }

  next(): void {
    this.cardClickCount.set(0);
    this.activeIndex.update((i) => (i + 1) % this.testimonials.length);
    this.displayIndex.set(this.activeIndex());
  }

  setActive(index: number): void {
    this.cardClickCount.set(0);
    this.activeIndex.set(index);
    this.displayIndex.set(index);
  }

  onCardClick(index: number): void {
    const active = this.activeIndex();
    const total = this.testimonials.length;
    const diff = (index - active + total) % total;
    if (diff === 0) return;

    const count = this.cardClickCount();

    if (count >= 2) {
      this.cardClickCount.set(0);
      this.activeIndex.update((i) => (diff === 1 ? (i + 1) % total : (i - 1 + total) % total));
      this.displayIndex.set(this.activeIndex());
    } else {
      this.cardClickCount.update((c) => c + 1);
      this.displayIndex.update((i) => (diff === 1 ? (i + 1) % total : (i - 1 + total) % total));
    }
  }

  getPosition(index: number): string {
    const active = this.activeIndex();
    const total = this.testimonials.length;
    const diff = (index - active + total) % total;
    if (diff === 0) return 'active';
    if (diff === 1) return 'next';
    return 'prev';
  }
}
