import { Route } from '@angular/router';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthLayout } from './components/auth-layout/auth-layout';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
    ],
  },

  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
