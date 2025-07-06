import { AuthState } from './auth.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);
export const selectError = createSelector(
  selectAuthState,
  (state) => state.error
);
export const selectLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);
