import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email;
  data;
  constructor() { }

  ngOnInit(): void {
  }

  register(regForm: NgForm) {
    if(regForm.valid) {
      console.log(regForm);
    }
  }

}
