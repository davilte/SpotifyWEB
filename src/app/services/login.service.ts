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

  getUser(id) {
    const path = environment.baseURL + "users/" + id
    this.http.get(path).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem("userNick", res.nick)
    }, (error) => {
      console.log(error);
    })
  }
}
