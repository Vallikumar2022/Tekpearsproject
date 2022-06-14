import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  editText = '' ;

  patientRegistrationForm: FormGroup;


  constructor(public dialogRef: MatDialogRef<PatientRegistrationFormComponent>,
    private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editText = this.data.isEdit ? 'Edit' : '';

    this.patientRegistrationForm = this.formBuilder.group({
      patientName:'',
      emailId:'',
      phoneNumber:'',
      age:'',
      sex:'',
      location:'',
      dateOfConsultation:'',
      purposeOfVisit:'',
    })

    if(this.editText === 'Edit'){
      this.updateForm(this.data.patientInfo)
    }
  }

  updateForm(patientInfo){
    console.log("patient info ---->", patientInfo);
    this.patientRegistrationForm.patchValue({
      patientName:patientInfo.name,
      emailId:'',
      phoneNumber:patientInfo.pNumber,
      age:'',
      sex:'Male',
      location:'Hyderabad',
      dateOfConsultation:'',
      purposeOfVisit:'',
    })
  }

  submitPatientDetails(){
    this.dialogRef.close();
      this._snackBar.open('Patient Details has been Registered ', 'Undo',{
        duration:3000
      })
  }

}
