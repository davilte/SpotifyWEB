import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AuthTokenService } from '../services/shared/auth-token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData = {
    nick: '',
    email: '',
    birthday: ''
  }

  editing = false;

  constructor(
    private authTokenService: AuthTokenService,
    private loginService: LoginService
  ) {
    this.getUser();
   }

  ngOnInit(): void {
  }

  startEdit() {
    this.editing = true;
  }

  save() {
    this.loginService.updateUser(this.userData, this.authTokenService.decode(localStorage.getItem('token')).sub)
  }

  getUser() {
    this.userData.nick = localStorage.getItem('userNick')
    this.userData.email = localStorage.getItem('userEmail')
    this.userData.birthday = localStorage.getItem('userBirth')
  }

}
