import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  constructor(public translation: Translation) {}
}
