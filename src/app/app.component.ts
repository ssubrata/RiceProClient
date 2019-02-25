import { Component } from '@angular/core';

import { AuthenticationService } from './Shared/serivce/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  isAuthenticate(): boolean {
    return this.authenticationService.isAuthenticate();
  }
  
  logout() {
    localStorage.removeItem('access_token');
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  userInfo():string{
    return this.authenticationService.userInfo();;
  }
}