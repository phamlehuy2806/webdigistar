import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroductionModule } from './feature-module/introduction/introduction.module';
import { RecaptchaDirective } from './core/directives/recaptcha.directive';

@NgModule({
  declarations: [AppComponent, RecaptchaDirective],
  imports: [BrowserModule, AppRoutingModule,
  IntroductionModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RecaptchaDirective]
})
export class AppModule {}
