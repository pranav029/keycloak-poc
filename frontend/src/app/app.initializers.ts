import {APP_INITIALIZER} from "@angular/core";
import {KeycloakService} from "./service/keycloak-service.service";

const kcFactory = (keycloak: KeycloakService) => {
  return () => keycloak.init()
}
const keycloakInitializer = {
  provide: APP_INITIALIZER,
  deps: [KeycloakService],
  useFactory: kcFactory,
  multi: true
}

export {keycloakInitializer}
