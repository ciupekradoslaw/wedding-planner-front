import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../../store/auth';

@Injectable()
export class ToolbarFacade {
  private readonly store = inject(Store);

  logout() {
    this.store.dispatch(logout());
  }
}
