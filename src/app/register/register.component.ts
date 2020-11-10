import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public fGroup: FormGroup;
  constructor(
    private fBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.fGroup = this.fBuilder.group({
      
      'email': [this.email, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'confirm_email': [this.confirm_email, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'password': [this.password, Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      'nick': [this.nick, Validators.compose([
        Validators.required,
      ])],
      'day': [this.day, Validators.compose([
        Validators.required,
      ])],
      'month': [this.month, Validators.compose([
        Validators.required,
      ])],
      'year': [this.year, Validators.compose([
        Validators.required,
      ])],
      
    },
    { validator: this.checkEmail })
  }

  email;
  confirm_email;
  password;
  nick;

  day;
  month;
  year;

  equalEmails = false;

  checkEmail(group: FormGroup) {
    let mail = group.get('email').value;
    let confirmMail = group.get('confirm_email').value;

    if(confirmMail !== null){
    return mail === confirmMail ? null : { notSame: true }
    }
  }

  ngOnInit(): void {}
  emailsCompare() {
    if (this.email === this.confirm_email) {
      this.equalEmails = false;
    }
    else {
      this.equalEmails = true;
    }
  }

  register() {
    
    let user = {
      email: this.fGroup.value.email,
      password: this.fGroup.value.password,
      nick: this.fGroup.value.nick,
      birthday: this.fGroup.value.day + "/" + this.fGroup.value.month + "/" + this.fGroup.value.year
    }
    this.registerService.register(user).subscribe((res) => {
      console.log(res);
    }, (err) => {
      alert('Usuário cadastrado com sucesso')
      this.fGroup.reset();
    })
    
  }
}