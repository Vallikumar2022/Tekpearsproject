import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-info-dailog',
  templateUrl: './patient-info-dailog.component.html',
  styleUrls: ['./patient-info-dailog.component.scss']
})
export class PatientInfoDailogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

}
