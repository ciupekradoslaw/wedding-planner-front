import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../shared/services/auth.service';
import { login, loginFailed, loginSuccess } from './auth.actions';
import { catchError, EMPTY, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class LoginEffects {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ username, password }) =>
        this.authService.login({ username, password }).pipe(
          map((response) => {
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('auth_token', response.token);
              localStorage.setItem('auth_username', response.username);
            }

            return loginSuccess({
              username: response.username,
              token: response.token,
            });
          }),
          catchError((error) => of(loginFailed({ error })))
        )
      )
    )
  );

  readonly redirectAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  readonly initAuth$ = createEffect(() => {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('auth_token');
      const username = localStorage.getItem('auth_username');

      if (token) {
        return of(loginSuccess({ username, token }));
      }
    }

    return EMPTY;
  });
}
