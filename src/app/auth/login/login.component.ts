import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm=this.formBuilder.group({
    email:['marco@gmail.com',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })
  constructor(private formBuilder: FormBuilder, private router:Router, private loginService:LoginService){
  }

  get email(){
    return this.loginForm.controls.email;
  }
  get password(){
    return this.loginForm.controls.password;
  }
  ngOnInit(): void {  
  }
  login (){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest)
      this.router.navigateByUrl('/inicio')
      this.loginForm.reset();
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("error al ingresar los datos")
    }
  }
}
