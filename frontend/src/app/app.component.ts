import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {KeycloakService} from "./service/keycloak-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'keycloakPoc';

  constructor(private keycloakService: KeycloakService) {
  }

  protected logout() {
    this.keycloakService.logout().then(r => console.log("logged out."))
  }
}
