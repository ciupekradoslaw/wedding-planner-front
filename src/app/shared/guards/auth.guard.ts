import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../../store/auth';
import { map, take } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(Store);
  const platformId = inject(PLATFORM_ID);

  return store.select(selectIsAuthenticated).pipe(
    take(1),
    map((isAuthenticated) => {
      let token: string | null = null;
      if (isPlatformBrowser(platformId)) {
        token = localStorage.getItem('auth_token');
      }

      if (isAuthenticated || token) {
        return true;
      }

      return router.createUrlTree(['/']);
    })
  );
};
