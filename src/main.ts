import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigBrowser } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfigBrowser).catch((err) => console.error(err));
