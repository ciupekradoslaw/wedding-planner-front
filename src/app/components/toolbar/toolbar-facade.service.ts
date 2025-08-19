import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout, selectIsAuthenticated } from '../../store/auth';

@Injectable()
export class ToolbarFacade {
  private readonly store = inject(Store);

  logout() {
    this.store.dispatch(logout());
  }

  readonly isAuthenticated = this.store.selectSignal(selectIsAuthenticated);
}
