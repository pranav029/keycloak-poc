import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {keycloakInitializer} from "./app.initializers";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    keycloakInitializer
  ]
};
