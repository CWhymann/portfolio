import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  constructor(public translation: Translation) {}
}
