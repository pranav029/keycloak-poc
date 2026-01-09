import {Component} from '@angular/core';
import {NetworkService} from "../../../service/network/network.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  title = ''

  constructor(private networkService: NetworkService, private router: Router) {
    this.networkService.getAdminName().subscribe({
      next: (data: string) => {
        console.log(data)
        this.title = data
      },
      error: (e: HttpErrorResponse) => {
        if (e.status === 403)
          this.router.navigate(["unauthorized"])
      }
    })
  }
}
