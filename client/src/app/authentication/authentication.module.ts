import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppMaterialModule } from '../common/angular-materail/app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpVerificationDailogComponent } from './forgot-password/otp-verification-dailog/otp-verification-dailog.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    OtpVerificationDailogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule, 
    ReactiveFormsModule,
    FormsModule
]


})
export class AuthenticationModule { }
