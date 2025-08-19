import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  { path: '', redirectTo: 'guests', pathMatch: 'full' },
  {
    path: 'guests',
    loadComponent: () =>
      import('./guests/guests.component').then((m) => m.GuestsComponent),
  },
];
