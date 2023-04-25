import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  emailUser: string = "";
  pwdUser: string = "";

  OnSubmit(){
    console.log(this.emailUser, this.pwdUser);
    alert("Login Validé")
  }

  protected readonly onsubmit = onsubmit;
}
