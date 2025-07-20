import { AppState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './store/auth';

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
};
