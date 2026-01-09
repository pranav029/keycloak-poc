import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) {
  }

  getNames(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/names`, {responseType: 'text'})
  }

  getAdminName(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/admin/names`, {responseType: 'text'})
  }
}
