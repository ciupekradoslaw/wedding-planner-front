import { createReducer, on } from '@ngrx/store';
import { authInitialState } from './auth.state';
import { login, loginFailed, loginSuccess } from './auth.actions';

export const loginReducer = createReducer(
  authInitialState,
  on(login, (state) => ({ ...state, isLoading: true })),
  on(loginSuccess, (state, { token }) => ({
    ...state,
    token,
    isLoading: false,
  })),
  on(loginFailed, (state, { error }) => ({ ...state, error, isLoading: false }))
);
