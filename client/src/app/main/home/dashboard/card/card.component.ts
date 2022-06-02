import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientRegistrationFormComponent } from './patient-registration-form/patient-registration-form.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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

    }
      
  ]
  constructor(public rfDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRegistrationFormDialog(){
    console.log('openRegistrationFormDialog func called');
    this.rfDialog.open(PatientRegistrationFormComponent, {width:'800px', height:'1000px', data: { name: '' },});
  }

}
