import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class LoginFacade {
  private readonly store = inject(Store);
}
