import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(public translation: Translation) {}
}
