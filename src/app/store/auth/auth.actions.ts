import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] User login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login success',
  props<{ username: string; token: string }>()
);

export const loginFailed = createAction(
  '[Auth] Login failed',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] User logout');

export type LoginAction = ReturnType<typeof login>;
export type LoginSuccessAction = ReturnType<typeof loginSuccess>;
export type LoginFailedAction = ReturnType<typeof loginFailed>;
export type LogoutAction = ReturnType<typeof logout>;
