import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { provideEffects } from '@ngrx/effects';
import { LoginEffects } from './store/auth';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

function commonProviders() {
  return [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore(appReducer),
    provideHttpClient(withInterceptors([authInterceptor]), withFetch()),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'pl',
      lang: 'pl',
    }),
  ];
}

export const appConfig: ApplicationConfig = {
  providers: [...commonProviders()],
};

export const appConfigBrowser: ApplicationConfig = {
  providers: [...commonProviders(), provideEffects([LoginEffects])],
};
