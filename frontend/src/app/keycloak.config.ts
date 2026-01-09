import {environment} from "../environments/environment";

const keycloakConfig = {
  url: environment.keycloakUrl,
  realm: environment.keycloakRealm,
  clientId: environment.keycloakClientId
}

export {keycloakConfig}
