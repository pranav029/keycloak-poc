import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getNames(): Observable<any> {
    return this.httpClient.get(`${window.__env.baseUrl}/api/names`, {responseType: 'text'})
  }

  getAdminName(): Observable<any> {
    return this.httpClient.get(`${window.__env.baseUrl}/api/admin/names`, {responseType: 'text'})
  }
}
