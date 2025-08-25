import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin.component').then((m) => m.AdminComponent),
  },
  {
    path: 'guests',
    loadComponent: () =>
      import('./guests/guests.component').then((m) => m.GuestsComponent),
  },
];
