import {environment} from "../../environments/environment";

const getKeycloakConfig = (config: any) => ({
    url: config.keycloakUrl,
    realm: config.keycloakRealm,
    clientId: config.keycloakClientId
  }
)

export {getKeycloakConfig}
