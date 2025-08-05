import { PLATFORM_ID, Provider } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { provideEffects } from '@ngrx/effects';
import { LoginEffects } from './store/auth';

export function browserOnlyProviders(): Provider[] {
  return [
    {
      provide: 'BROWSER_ONLY_EFFECTS',
      useFactory: (platformId: object) => {
        return isPlatformBrowser(platformId)
          ? [provideEffects(LoginEffects)]
          : [];
      },
      deps: [PLATFORM_ID],
      multi: true,
    },
  ];
}
