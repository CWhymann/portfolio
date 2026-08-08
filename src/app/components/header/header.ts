import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Translation } from '../../core/translation';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = signal(false);

  constructor(public translation: Translation) {}

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  setLanguage(lang: 'en' | 'de'): void {
    this.translation.setLanguage(lang);
  }
}
