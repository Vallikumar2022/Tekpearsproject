import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OtpVerificationDailogComponent } from './otp-verification-dailog/otp-verification-dailog.component';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  displayforgotPasswordInfo = false;

  emailFU = '';
  emailFP = '';
  isSubmittedEmail = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}, 
  public otpVerificationDialog: MatDialog, 
  public dialogRef: MatDialogRef<ForgotPasswordComponent>,
  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data.name);
    console.log(this.isSubmittedEmail)
  }

  submit(){
    if(this.emailFU !== '' && this.emailFU.includes('@')){
      // this.isSubmittedEmail = true;
      this.dialogRef.close();
      this._snackBar.open('Username has been sent to the registered Email', 'Undo',{
        duration:3000
      })
      // snackbar.open('Message archived', 'Undo', {
      //   duration: 3000
      // });
      // this.otpVerificationDialog.open(OtpVerificationDailogComponent, {width:'700px', height:'500px',data: { name: '' },})
    }else if(this.emailFP !== '' && this.emailFP.includes('@')){
      this.isSubmittedEmail = true;
      
      this.dialogRef.close();

      this.otpVerificationDialog.open(OtpVerificationDailogComponent, {width:'700px', height:'500px',data: { name: '' },})

      this._snackBar.open('OTP has been sent to the registered Email', 'Undo',{
        duration:3000
      })
    }
  }

}
