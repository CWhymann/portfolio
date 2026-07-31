import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LegalNotice } from './components/legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'legal-notice', component: LegalNotice },
];
