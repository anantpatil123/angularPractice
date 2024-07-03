import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      email: new FormControl ('',Validators.required),
      password: new FormControl ('',Validators.required)
    })
  }


  onLogin(){
    console.log("OnLoginSubmit",this.loginForm.value);
  }
}
