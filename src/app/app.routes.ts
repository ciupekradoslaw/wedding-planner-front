import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout/layout.component';

export const appRoutes: Route[] = [
  { path: '', component: LayoutComponent },

  { path: 'login', component: LoginComponent },
];
