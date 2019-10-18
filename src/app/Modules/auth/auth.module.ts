import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from '../notifier/notifier.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotifierModule,
    AuthRoutingModule
  ],
  exports : [ LoginComponent, SignupComponent ]
})
export class AuthModule { }
