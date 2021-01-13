import { Component } from '@angular/core';

@Component({
  selector: 'webdigistarorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webdigistar';
  token: string;
  onRecaptchaSuccess(token: string) {
    this.token = token;
  }
}
