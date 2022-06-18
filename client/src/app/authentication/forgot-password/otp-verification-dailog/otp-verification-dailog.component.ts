import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-otp-verification-dailog',
  templateUrl: './otp-verification-dailog.component.html',
  styleUrls: ['./otp-verification-dailog.component.scss']
})
export class OtpVerificationDailogComponent implements OnInit {

  isOtpSubmitted = false;
  userEnteredOTP = ''
  newPassword=''
  constructor(private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<OtpVerificationDailogComponent> ) { }

  ngOnInit(): void {
  }

  otpSubmit(){
    if(this.userEnteredOTP !==''){
      this.isOtpSubmitted = true;
      this._snackBar.open('OTP has been verified successfully', 'Valid', {
        duration:3000
      });
    }else{
      this._snackBar.open('Please enter the OTP', 'Not Valid', {
        duration:3000
      });
    }
  }

  resetPassword(){
    if(this.newPassword !==''){
      this.dialogRef.close();
      this._snackBar.open('Your password changed successfully', 'Updated', {
        duration:3000
      });


    }else{
      this._snackBar.open('Please enter password', 'Empty', {
        duration:3000
      });
    }
  }
}
