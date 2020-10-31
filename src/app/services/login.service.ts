import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  login(data) {
    const path = environment.baseURL + "login"
    return this.http.post(path, data)
  }

  getUser(token) {

  }
}
