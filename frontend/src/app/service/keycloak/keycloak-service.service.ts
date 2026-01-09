import {Injectable} from '@angular/core';
import Keycloak from "keycloak-js";
import {keycloakConfig} from "../../config/keycloak.config";


@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined

  get keycloak(): Keycloak {
    if (!this._keycloak) {
      this._keycloak = new Keycloak(keycloakConfig)
    }
    return this._keycloak
  }

  constructor() {
  }

  async init() {
    const authenticated = await this.keycloak.init({
      onLoad: 'login-required'
    })
    if (authenticated)
      console.log(this.keycloak.tokenParsed)
  }

  login() {
    return this.keycloak.login()
  }

  logout() {
    return this.keycloak.logout({redirectUri: window.location.origin})
  }
}
