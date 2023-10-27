import { AuthService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    console.log('home on init ..');
  }

  login() {
    this.authService.navigateToLogin();
  }

  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

 
}
