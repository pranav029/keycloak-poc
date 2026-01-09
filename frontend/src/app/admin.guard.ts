import {CanActivateFn} from "@angular/router";
import {inject} from "@angular/core";
import {KeycloakService} from "./service/keycloak/keycloak-service.service";

const adminGuard: CanActivateFn = (route, state) => {
  const keycloakService = inject(KeycloakService)
  return keycloakService.keycloak.hasResourceRole("ROLE_ADMIN")
}

export {adminGuard}
