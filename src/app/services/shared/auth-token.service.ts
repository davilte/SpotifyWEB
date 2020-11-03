
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('token')
  }

  decode(token: string) {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        console.log("error decoding token");
    }
  }
  
}
