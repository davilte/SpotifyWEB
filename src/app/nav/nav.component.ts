import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  ajuda = false;
  loggedIn = false;
  nick;
  constructor(
    private router: Router,
  ) {
    this.checkLogin();
   }

  checkLogin() {
    this.nick = localStorage.getItem('userNick')
    if(this.nick != null) {
      this.loggedIn = true;
    }
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

}
