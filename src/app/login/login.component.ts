import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.data).subscribe((res: any) => {
      localStorage.setItem("token", res.accessToken);
      


      this.wrongLogin = false;
      alert("Bem vindo!")
      this.router.navigate(['']);
    }, (err) => {
      this.wrongLogin = true;
    })
  }
}
