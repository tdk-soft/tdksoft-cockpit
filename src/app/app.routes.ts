import { Routes } from '@angular/router';

/**
 * Root routing configuration.
 * Uses lazy loading → improves performance & scalability.
 */
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes')
        .then(m => m.HOME_ROUTES)
  }
];