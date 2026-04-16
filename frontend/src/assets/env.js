(function (window) {
  window.__env = window.__env || {};
  window.__env.production = true;

  window.__env.baseUrl = "http://localhost:8082";
  window.__env.keycloakUrl = "http://localhost:8080";
  window.__env.keycloakRealm = "confidata";
  window.__env.keycloakClientId = "keycloak-poc";

})(this);
