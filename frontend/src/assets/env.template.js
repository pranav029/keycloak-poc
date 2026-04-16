(function (window) {
  window.__env = window.__env || {};
  window.__env.production = true;

  window.__env.baseUrl = "${BASE_URL}";
  window.__env.keycloakUrl = "${KEYCLOAK_URL}";
  window.__env.keycloakRealm = "${KEYCLOAK_REALM}";
  window.__env.keycloakClientId = "${KEYCLOAK_CLIENT_ID}";

})(this);
