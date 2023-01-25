import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-should-login',
  template: './loginneeded.html',
})
export class LoginNeededComponent {
  constructor(private authService: OAuthService) { }

  public login($event: any) {
    $event.preventDefault();
    this.authService.initLoginFlow();
  }
}
