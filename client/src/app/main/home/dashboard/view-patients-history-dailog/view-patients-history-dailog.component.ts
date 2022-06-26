import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



export interface PeriodicElement {
  position:number
  name: string;
  dateOfConsultation: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', dateOfConsultation:'13-Jun-2022'},
  {position: 2, name: 'Helium', dateOfConsultation:'18-Jun-2022'},
  {position: 3, name: 'Lithium', dateOfConsultation:'21-Jun-2022'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const ELEMENT_DATA2: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', dateOfConsultation:'Rama Krishna (MBBS)'},
  {position: 2, name: 'Helium', dateOfConsultation:'Sangeetha (MBBS)'},
  {position: 3, name: 'Lithium', dateOfConsultation:'Hari Yadav(ENT)'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-view-patients-history-dailog',
  templateUrl: './view-patients-history-dailog.component.html',
  styleUrls: ['./view-patients-history-dailog.component.scss']
})
export class ViewPatientsHistoryDailogComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'dateOfConsultation'];
  dataSource = ELEMENT_DATA;
  
  dataSource2 = ELEMENT_DATA2
  patientName = ''
  isPatientsHistory =  true
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.patientName = this.data?.patientInfo?.name
    this.isPatientsHistory = this.data.isPatientsHistory;
    console.log(this.isPatientsHistory)
  }

}
