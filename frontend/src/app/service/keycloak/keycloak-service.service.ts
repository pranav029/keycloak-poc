import {Injectable} from '@angular/core';
import Keycloak from "keycloak-js";
import {getKeycloakConfig} from "../../config/keycloak.config";


@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined

  get keycloak(): Keycloak {
    if (!this._keycloak) {
      this._keycloak = new Keycloak(getKeycloakConfig())
    }
    return this._keycloak
  }

  constructor() {
  }

  async init() {
    await this.keycloak.init({
      onLoad: 'login-required'
    }).then(async () => {
      const user = await this.keycloak.loadUserInfo()
      console.log(user)
    })
      .catch(() => console.log("login failed"))
  }

  login() {
    return this.keycloak.login()
  }

  logout() {
    return this.keycloak.logout({redirectUri: window.location.origin})
  }
}
