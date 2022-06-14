import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PatientRegistrationFormComponent } from './card/patient-registration-form/patient-registration-form.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { PatientInfoDailogComponent } from './patient-info-dailog/patient-info-dailog.component';
import { PrescriptionDialogComponent } from './prescription-dialog/prescription-dialog.component';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'pId', 'pNumber', 'speciality','consultedDoctor','typeOfConsultation',
  'dateOfAppointment','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  selectedValue: string;
  selectedValue1: string;
  selectedValue2: string;
  selectedValue3: string;

  selectedCar: string;

  foods: Food[] = [
    {value: 'Cardiology', viewValue: 'Cardiology'},
    {value: 'Neurology', viewValue: 'Neurology'},
    {value: 'Gynacology', viewValue: 'Gynacology'},

  ];

  typeOfconsultation = [
    {value: 'Online', viewValue: 'Online'},
    {value: 'Offline', viewValue: 'Offline'},
    {value: 'Tele Consultation', viewValue: 'Tele Consultation'}
  ]

  status = [{value: 'Open', viewValue: 'Open'},
  {value: 'Revisit', viewValue: 'Revisit'},
  {value: 'Close', viewValue: 'Close'}]
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public patientInfoDialog: MatDialog,
    public patientEditFormDailog: MatDialog,
    public deleteDialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewPatientInfo(patientId){
    console.log("patient Id", patientId);
    let patientData = {};
    for(let i = 0;i<ELEMENT_DATA.length; i++){
      if(ELEMENT_DATA[i].position === patientId){
        patientData = ELEMENT_DATA[i];
      }
    }
    this.patientInfoDialog.open(PatientInfoDailogComponent, {width:'700px',data: patientData});
  }

  viewDoctorsPrescription(pos){
    this.patientEditFormDailog.open(PrescriptionDialogComponent, {width:'800px', height:'500px', data: { name: '' }})
  }

  viewEditForm(value, pos){
    let patientData = {};
    for(let i = 0;i<ELEMENT_DATA.length; i++){
      if(ELEMENT_DATA[i].position === pos){
        patientData = ELEMENT_DATA[i];
      }
    }
    this.patientEditFormDailog.open(PatientRegistrationFormComponent, {width:'800px', height:'970px', data: { isEdit: value, patientInfo: patientData}})
  }

  deletePatientDetails(pos){
    let patientData = {};
    for(let i = 0;i<ELEMENT_DATA.length; i++){
      if(ELEMENT_DATA[i].position === pos){
        patientData = ELEMENT_DATA[i];
      }
    }
    this.deleteDialog.open(DeleteDialogComponent, {width:'600px',height:'200px', data:{patientData}});
  }

  applyFilter(event) {
    if(event.target !== undefined){
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      return
    }
    let value = event?.value
    this.dataSource.filter = value.trim().toLowerCase();  
  }



}


export interface PeriodicElement {
  name: string;
  position: number;
  pId: number;
  pNumber: string;
  speciality:string;
  consultedDoctor:string;
  typeOfConsultation: string;
  dateOfAppointment:string;
  status:string;
  action:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Kiran', pId: 10020, pNumber:'5566889900', speciality:'Cardiology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view'},
  {position: 2, name: 'Abhishek', pId: 10021, pNumber:'2244667788', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view' },
  {position: 3, name: 'Amar', pId: 10022, pNumber:'3388775555', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Offline', dateOfAppointment:'13-JUNE-2022', status:'Revisit', action:'view'},
  {position: 4, name: 'Sanmitha', pId: 10023, pNumber:'7799880000', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view'},
  {position: 5, name: 'Tele Consultation', pId: 10024, pNumber:'7766557788', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Closed', action:'view'},
  {position: 6, name: 'Arjun Singh palai', pId: 1.0079, pNumber:'4466556677', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view'},
  {position: 7, name: 'Kiran', pId: 1.0079, pNumber:'88999776655', speciality:'Cardiology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Closed', action:'view'},
  {position: 8, name: 'Kiran', pId: 1.0079, pNumber:'55666443355', speciality:'Neurology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view' },
  {position: 9, name: 'Harish', pId: 1.0079, pNumber:'8899007766', speciality:'Gynacology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view'},
  {position: 10, name: 'Shyam', pId: 1.0079, pNumber:'4466557766', speciality:'Neurology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-JUNE-2022', status:'Revisit', action:'view'},
  {position: 11, name: 'Kiran', pId: 1.0079, pNumber:'4455336655', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-JUNE-2022', status:'Revisit', action:'view'},
  {position: 12, name: 'Bhuvan', pId: 1.0079, pNumber:'1133224455', speciality:'Gynacology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Offline', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view'},
  {position: 13, name: 'Kiran', pId: 1.0079, pNumber:'9963661535', speciality:'Neurology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Offline', dateOfAppointment:'13-JUNE-2022', status:'Revisit', action:'view'},
  {position: 14, name: 'Praveen', pId: 1.0079, pNumber:'9963661535', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Closed', action:'view' },
  {position: 15, name: 'Umakanth', pId: 1.0079, pNumber:'9963661535', speciality:'Gynacology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Offline', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view'},
  {position: 16, name: 'Ramana', pId: 1.0079, pNumber:'9963661535', speciality:'Cardiology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view'},
  {position: 17, name: 'Srikanth', pId: 1.0079, pNumber:'9963661535', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Closed', action:'view'},
  {position: 18, name: 'Pramod', pId: 1.0079, pNumber:'9963661535', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Closed', action:'view'},
  {position: 19, name: 'Kiran', pId: 1.0079, pNumber:'9963661535', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-JUNE-2022', status:'Revisit', action:'view'},
  {position: 20, name: 'Kiran', pId: 1.0079, pNumber:'554433433', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Closed', action:'view' },
  {position: 21, name: 'Kiran', pId: 1.0079, pNumber:'2244335566', speciality:'Cardiology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Closed', action:'view'},
  {position: 22, name: 'Giri', pId: 1.0079, pNumber:'2211334433', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Closed', action:'view'},
  {position: 23, name: 'Vishnu', pId: 1.0079, pNumber:'2233445566', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view'},
  {position: 24, name: 'Vamsi', pId: 1.0079, pNumber:'1122334455', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-JUNE-2022', status:'Open', action:'view'},
];