import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from '../app.routes';
import {keycloakInitializer} from "../app.initializers";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "../auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    keycloakInitializer,
    provideHttpClient(withInterceptors([authInterceptor])),
  ]
};
