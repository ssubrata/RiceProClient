import { Component, OnInit } from '@angular/core';
import { LoginService } from './Service/login.servcie';
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Shared/serivce/authentication.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private loginService: LoginService,
     private tokenSerivce:AuthenticationService,
     private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
    });
  }

  Login() {
    debugger;
    this.loginService.logIn(this.loginForm.value).subscribe((data: any) => {
      localStorage.setItem('access_token', data.access_token);
      this.router.navigate(["/supplier"]);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }

}
