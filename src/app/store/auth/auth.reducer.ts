import { createReducer, on } from '@ngrx/store';
import { authInitialState } from './auth.state';
import { login, loginFailed, loginSuccess, logout } from './auth.actions';

export const authReducer = createReducer(
  authInitialState,
  on(login, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    username: null,
  })),

  on(loginSuccess, (state, { username, token }) => ({
    ...state,
    username,
    token,
    isLoading: false,
    isAuthenticated: true,
  })),

  on(loginFailed, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    error,
    isLoading: false,
  })),

  on(logout, () => authInitialState)
);
