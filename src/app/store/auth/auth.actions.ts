import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] User login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login] Login success',
  props<{ token: string }>()
);

export const loginFailed = createAction(
  '[Login] Login failed',
  props<{ error: string }>()
);

export type LoginAction = ReturnType<typeof login>;
export type LoginSuccessAction = ReturnType<typeof loginSuccess>;
export type LoginFailedAction = ReturnType<typeof loginFailed>;
