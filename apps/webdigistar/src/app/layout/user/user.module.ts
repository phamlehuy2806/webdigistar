import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
// import {  } from './components/nav-bar'

@NgModule({
  declarations: [UserComponent,NavbarComponent,FooterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ]
})
  
export class UserModule { }
