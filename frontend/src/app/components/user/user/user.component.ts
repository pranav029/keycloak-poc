import {Component} from '@angular/core';
import {NetworkService} from "../../../service/network/network.service";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title = ''

  constructor(private networkService: NetworkService) {
    this.networkService.getNames().subscribe({
      next: (data: string) => {
        console.log(data)
        this.title = data
      },
      error: (e) => {
        console.log(e.error)
      }
    })
  }
}
