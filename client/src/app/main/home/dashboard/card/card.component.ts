import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientRegistrationFormComponent } from './patient-registration-form/patient-registration-form.component';
import { ELEMENT_DATA } from '../dashboard.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() patientInfo;
  cardsList = [
    {
      title:'Total Patients',
      subTitle:'',
      count:24,
      isClickable:false,
      icon: 'fa fa-users'

    },
    {
      title:'Online Consultation',
      subTitle:'',
      count:10,
      isClickable:false,
      icon:'fa fa-internet-explorer'
    },

    {
      title:'Offline Consultation',
      subTitle:'',
      count:9,
      isClickable:false,
      icon:'fa fa-user'
    },
    {
      title:'Tele Consultation',
      subTitle:'',
      count:5,
      isClickable:false,
      icon:'fa fa-phone'
    },
    {
      title:'Register a New Patient',
      subTitle:'',
      count:'',
      isClickable:true,
      icon:'fa fa-user-circle',
      icon2:'fa fa-hand-pointer-o'

    },
    {
      title:'Registered Patients',
      subTitle:'',
      count:'',
      isClickable:true,
      icon:'fa fa-registered',
      icon2:'fa fa-mouse-pointer'
    }   
  ]
  constructor(public rfDialog: MatDialog) { }

  ngOnInit(): void {
  }

  patientObj = {};
  openRegistrationFormDialog(value, event){

    console.log('openRegistrationFormDialog func called', event);

    // Added condition to check if it is a patient registration form or not 
    if(!event.currentTarget.outerText.includes('New')){
      let patientsList = [];
      for(let i=0;i<ELEMENT_DATA.length;i++){
        patientsList.push(ELEMENT_DATA[i].name);
      }
      this.rfDialog.open(PatientRegistrationFormComponent, {width:'800px', height:'800px', data: { isEdit: value, isNew:false, pl:patientsList }});
      return
    }
    // Opens the Patients registration form 
    const dialogRef = this.rfDialog.open(PatientRegistrationFormComponent, {width:'800px', height:'800px', data: { isEdit: value, isNew:true }});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.patientObj = result;
      console.log("regestered patient info ---->",this.patientObj);
      this.patientInfo = this.patientObj;

    });
  }

}
