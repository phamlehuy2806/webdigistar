import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroductionModule } from './feature-module/introduction/introduction.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,
  IntroductionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
