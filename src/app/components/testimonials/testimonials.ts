import { Component, signal } from '@angular/core';

interface Testimonial {
  text: string;
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
      text: 'I benefited enormously from working with Paul. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'T.Schulz',
      role: 'Frontend Developer',
    },
    {
      text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H.Janisch',
      role: 'Team Partner',
    },
    {
      text: "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
      author: 'A. Fischer',
      role: 'Team Partner',
    },
  ];

  activeIndex = signal(1);
  displayIndex = signal(1);
  cardClickCount = signal(0);

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
