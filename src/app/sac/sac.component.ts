import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sac',
  templateUrl: './sac.component.html',
  styleUrls: ['./sac.component.scss']
})
export class SacComponent implements OnInit {

  constructor() { }
  r1 = false;
  r2 = false;
  r3 = false;
  r4 = false;
  ngOnInit(): void {
  }
  Answer(doubt) {
    switch(doubt) {
      case 1:
      this.r1 = !this.r1;
      break;
      case 2:
      this.r2 = !this.r2;
      break;
      case 3:
      this.r3 = !this.r3;
      break;
      case 4:
      this.r4 = !this.r4;
      break;
      default:

    }
  }
}
