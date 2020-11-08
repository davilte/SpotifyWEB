import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthTokenService } from '../services/shared/auth-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  wrongLogin = false;

  data = {
    email: "",
    password: ""
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authTokenService: AuthTokenService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.data).subscribe((res: any) => {

      localStorage.setItem("token", res.accessToken)
      localStorage.setItem("userId", this.authTokenService.decode(res.accessToken).sub)
      //Pegando informações do usuário
      this.loginService.getUser(this.authTokenService.decode(res.accessToken).sub)

      this.wrongLogin = false;
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
    }, (err) => {
      this.wrongLogin = true;
    })
  }
}
