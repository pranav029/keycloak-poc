import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private httpClient: HttpClient,
    @Inject("APP_CONFIG") private config: any
  ) {
  }

  getNames(): Observable<any> {
    return this.httpClient.get(`${this.config.baseUrl}/api/names`, {responseType: 'text'})
  }

  getAdminName(): Observable<any> {
    return this.httpClient.get(`${this.config.baseUrl}/api/admin/names`, {responseType: 'text'})
  }
}
