import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../shared/auth.service';
import { login, loginFailed, loginSuccess } from './auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class LoginEffects {
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ username, password }) =>
        this.authService.login({ username, password }).pipe(
          map((response) => loginSuccess({ token: response.token })),
          catchError((error) => of(loginFailed({ error })))
        )
      )
    )
  );
}
