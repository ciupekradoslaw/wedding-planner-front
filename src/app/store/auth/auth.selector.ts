import { AuthState } from './auth.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUsername = createSelector(
  selectAuthState,
  (state) => state.username
);
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);
export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);
export const selectError = createSelector(
  selectAuthState,
  (state) => state.error
);
export const selectIsLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading
);
