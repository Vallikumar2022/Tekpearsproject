import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-registration-form',
  templateUrl: './patient-registration-form.component.html',
  styleUrls: ['./patient-registration-form.component.scss']
})
export class PatientRegistrationFormComponent implements OnInit {

  selectedValue = ''
  speciality = [
    {value: 'Cardiology', viewValue: 'Cardiology'},
    {value: 'Neurology', viewValue: 'Neurology'},
    {value: 'Gynacology', viewValue: 'Gynacology'},

  ];

  typeOfconsultation = [
    {value: 'Online', viewValue: 'Online'},
    {value: 'Offline', viewValue: 'Offline'},
    {value: 'Tele Consultation', viewValue: 'Tele Consultation'}
  ]

  status = [
    {value: 'Open', viewValue: 'Open'},
    {value: 'Revisit', viewValue: 'Revisit'},
    {value: 'Close', viewValue: 'Close'}
  ]

  doctorsList = [
    {value: 'Ramakrishna', viewValue: 'Ramakrishna'},
    {value: 'Harikrishna', viewValue: 'Harikrisha'},
    {value: 'Samuel', viewValue: 'Samuel'},
    {value: 'Pradeep', viewValue: 'Pradeep'}
  ]

  constructor(public dialogRef: MatDialogRef<PatientRegistrationFormComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitPatientDetails(){
    this.dialogRef.close();
      this._snackBar.open('Patient Details has been Registered ', 'Undo',{
        duration:3000
      })
  }

}
