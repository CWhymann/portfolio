import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(public translation: Translation) {}
}
