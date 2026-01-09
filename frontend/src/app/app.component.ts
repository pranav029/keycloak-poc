import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {KeycloakService} from "./service/keycloak/keycloak-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'keycloakPoc';

  constructor(
    private keycloakService: KeycloakService,
    private router: Router
  ) {
  }

  protected logout() {
    this.keycloakService.logout().then(r => console.log("logged out."))
  }

  protected navigateToUser() {
    this.router.navigate(['user']);
  }

  protected navigateToAdmin() {
    this.router.navigate(['admin']);
  }
}
