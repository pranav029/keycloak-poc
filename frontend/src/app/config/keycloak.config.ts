import {environment} from "../../environments/environment";

const getKeycloakConfig = () => ({
    url: window.__env.keycloakUrl,
    realm: window.__env.keycloakRealm,
    clientId: window.__env.keycloakClientId
  }
)

export {getKeycloakConfig}
