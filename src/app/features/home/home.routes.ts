import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';

/**
 * Feature routing (lazy-load ready).
 */
export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomePage
  }
];