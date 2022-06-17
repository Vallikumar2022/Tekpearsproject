import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ELEMENT_DATA } from '../../dashboard.component';
import { ViewPatientsHistoryDailogComponent } from '../../view-patients-history-dailog/view-patients-history-dailog.component';

@Component({
  selector: 'app-patient-registration-form',
  templateUrl: './patient-registration-form.component.html',
  styleUrls: ['./patient-registration-form.component.scss']
})
export class PatientRegistrationFormComponent implements OnInit {

  patientsList=[]
  selectedValue = ''
  speciality = [
    {value: 'Cardiology', viewValue: 'Cardiology'},
    {value: 'Neurology', viewValue: 'Neurology'},
    {value: 'Gynacology', viewValue: 'Gynacology'},
    {value: 'ENT', viewValue: 'ENT'},

  ];
  opValidityDD = [{value:'Within the Validity ', viewValue:'Within the Validity '},
                  {value:'Validity Expired', viewValue:'Validity Expired'}]

  opValidityValue = new FormControl('Within the Validity');
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
  isNewPatientRegistration;
  isOP = false;

  constructor(public dialogRef: MatDialogRef<PatientRegistrationFormComponent>,
    private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.editText = this.data.isEdit ? 'Edit' : '';
    this.isNewPatientRegistration = this.data.isNew;
    this.patientsList = this.data.pl;
    this.isOP = this.data.isOP;
    console.log("patients list ---->", this.patientsList);

    this.patientRegistrationForm = this.formBuilder.group({
      patientName:[{value:'', disabled:this.isOP}],
      emailId:[{value:'', disabled:this.isOP}],
      phoneNumber:[{value:'', disabled:this.isOP}],
      age:[{value:'', disabled:this.isOP}],
      sex:[{value:'', disabled:this.isOP}],
      location:[{value:'', disabled:this.isOP}],
      dateOfConsultation:'',
      purposeOfVisit:'',
      speciality:[{value:'', disabled:this.isOP}]
    })

    if(this.editText === 'Edit'){
      this.updateForm(this.data.patientInfo)
    }
  }

  openHistory(){
    // this.dailo
    this.dialog.open(ViewPatientsHistoryDailogComponent,{width:'600px', data: { isPatientsHistory: false, patientInfo:this.data.patientInfo }});
  }
  onPatientSelection(event){
    console.log("patient name ---->>>",event.value);
    for(let i = 0; i<ELEMENT_DATA.length;i++){
      if(ELEMENT_DATA[i].name === event.value){
        this.updateForm(ELEMENT_DATA[i])
      }

    }
  }

  updateForm(patientInfo){
    console.log("patient info ---->", patientInfo);
    this.patientRegistrationForm.patchValue({
      patientName:patientInfo.name,
      emailId:patientInfo.name+"@gmail.com",
      phoneNumber:patientInfo.pNumber,
      age:'26',
      sex:'Male',
      location:'Hyderabad',
      dateOfConsultation:'',
      purposeOfVisit:'',
      // speciality:[{value:patientInfo.speciality}]
    })

    this.patientRegistrationForm.get('speciality').setValue(patientInfo.speciality);
  }

  submitPatientDetails(){
    this.dialogRef.close();
      this._snackBar.open('Patient Details has been Registered ', 'Undo',{
        duration:3000
      })
  }

}
