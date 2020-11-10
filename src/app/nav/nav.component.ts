import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  ajuda = false;
  loggedIn = false;
  nick;
  text;
  results;

  constructor(
    private router: Router,
    private musicService: MusicService
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

  search() {
    this.musicService.searchName(this.text).subscribe((res) => {
      this.results = res;
      this.musicService.searchArtist(this.text).subscribe((res) => {
        this.results = this.results.concat(res);
        console.log(this.results); 
      }, (err) => {
        console.log(err);
      })
    }, (err) => {
      console.log(err);
    })
    
  }

}
