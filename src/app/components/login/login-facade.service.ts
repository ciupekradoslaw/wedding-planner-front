import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, selectError, selectIsAuthenticated, selectIsLoading } from '../../store/auth';

@Injectable()
export class LoginFacade {
  private readonly store = inject(Store);

  readonly isAuthenticated = this.store.selectSignal(selectIsAuthenticated);

  readonly isLoading = this.store.selectSignal(selectIsLoading);

  readonly error = this.store.selectSignal(selectError);

  login(payload: { username: string; password: string }) {
    this.store.dispatch(login(payload));
  }
}
