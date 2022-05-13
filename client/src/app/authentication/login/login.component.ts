import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, public fpDialog: MatDialog) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      userId:['', Validators.required],
      orgId:['',Validators.required],
      password:['',Validators.required]
  });
  }

  login(){
    this.isSubmitted = true;
  }

  get formControls() { return this.loginForm.controls; }

  openForgotPasswordDialog(){
    this.fpDialog.open(ForgotPasswordComponent, {width:'700px', height:'500px',data: { name: 'forgotPassword' },});
  }

  openForgotUsernameDialog(){
    this.fpDialog.open(ForgotPasswordComponent, {width:'700px', height:'500px',data: { name: 'forgotUsername' },});
  }

}
