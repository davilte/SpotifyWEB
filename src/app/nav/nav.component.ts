import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  ajuda = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
