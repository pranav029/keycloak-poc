import {HttpHeaders, HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {KeycloakService} from "./service/keycloak/keycloak-service.service";

const authInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloakService = inject(KeycloakService)
  const token = keycloakService.keycloak.token
  if (token) {
    const authReq = req.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
    return next(authReq)
  }
  return next(req)
}

export {authInterceptor}
