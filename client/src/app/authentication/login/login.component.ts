import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

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

}
