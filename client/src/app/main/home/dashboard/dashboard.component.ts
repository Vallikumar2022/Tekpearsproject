import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PatientRegistrationService } from 'src/app/services/MainModuleServices/patient-registration-service';
import { PatientRegistrationFormComponent } from './card/patient-registration-form/patient-registration-form.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { PatientInfoDailogComponent } from './patient-info-dailog/patient-info-dailog.component';
import { PrescriptionDialogComponent } from './prescription-dialog/prescription-dialog.component';
import { ViewPatientsHistoryDailogComponent } from './view-patients-history-dailog/view-patients-history-dailog.component';


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
  'dateOfAppointment','status','action','Updation'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  selectedSpeciality: string;
  selectedConsultation: string;
  selectedStatus: string;
  selectedValue3: string;

  selectedCar: string;
  @Input() patientInfo

  foods: Food[] = [
    {value:'',viewValue:'All'},
    {value: 'Cardiology', viewValue: 'Cardiology'},
    {value: 'Neurology', viewValue: 'Neurology'},
    {value: 'Gynacology', viewValue: 'Gynacology'},

  ];

  typeOfconsultation = [
    {value:'',viewValue:'All'},
    {value: 'Online', viewValue: 'Online'},
    {value: 'Offline', viewValue: 'Offline'},
    {value: 'Tele Consultation', viewValue: 'Tele Consultation'}
  ]

  statusList = [
    {value:'',viewValue:'All'},
  {value: 'Open', viewValue: 'Open'},
  {value: 'Revisit', viewValue: 'Revisit'},
  {value: 'Close', viewValue: 'Close'}]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public dialog: MatDialog,
    private patientRegistrationService: PatientRegistrationService
    ) { }

  ngOnInit(): void {
    this.patientRegistrationService.getRegisteredPatientDetails().subscribe((data:PeriodicElement)=>{
      console.log("newly registered patient details---->>",data);
      ELEMENT_DATA.push(data)
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    });

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
    this.dialog.open(PatientInfoDailogComponent, {width:'700px',data: patientData});
  }

  viewDoctorsPrescription(pos){
    this.dialog.open(PrescriptionDialogComponent, {width:'800px', height:'520px', data: { name: ''  }})
  }

  viewEditForm(value, pos){
    let patientData = {};
    for(let i = 0;i<ELEMENT_DATA.length; i++){
      if(ELEMENT_DATA[i].position === pos){
        patientData = ELEMENT_DATA[i];
      }
    }
    this.dialog.open(PatientRegistrationFormComponent, {width:'800px', height:'800px', data: { isEdit: value, patientInfo: patientData}})
  }

  deletePatientDetails(pos){
    let patientData = {};
    for(let i = 0;i<ELEMENT_DATA.length; i++){
      if(ELEMENT_DATA[i].position === pos){
        patientData = ELEMENT_DATA[i];
      }
    }
    this.dialog.open(DeleteDialogComponent, {width:'600px',height:'200px', data:{patientData}});
  }

  openPatientVisitHistory(patientInfo){
    this.dialog.open(ViewPatientsHistoryDailogComponent, {width:'600px', data:{patientInfo, isPatientsHistory:true}})
  }

  openCDHistory(patientInfo){
    this.dialog.open(ViewPatientsHistoryDailogComponent, {width:'600px', data:{patientInfo, isPatientsHistory:false}})
  }

  openOPForm(value, patientDetails){
    this.dialog.open(PatientRegistrationFormComponent, {width:'800px', height:'800px', data: { isEdit: value, patientInfo: patientDetails, isOP:true}})
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

  filteredData = []
//   applyFilter2(){
//     this.filteredData = []
//     if(this.selectedConsultation === '' && this.selectedSpeciality ==='' && this.selectedStatus === ''){
//       this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
//       return
//     }
//     for(let i=0;i<ELEMENT_DATA.length; i++){
//       if(this.selectedSpeciality && this.selectedStatus && this.selectedConsultation){
//         // ELEMENT_DATA[i].speciality === this.selectedSpeciality &&
//         // ((this.selectedSpeciality && this.selectedStatus && this.selectedConsultation) && ELEMENT_DATA[i]) ? 
//         if(ELEMENT_DATA[i].speciality === this.selectedSpeciality &&
//           ELEMENT_DATA[i].status === this.selectedStatus && 
//           ELEMENT_DATA[i].typeOfConsultation === this.selectedConsultation){
//             this.filteredData.push(ELEMENT_DATA[i]);
//         }
//        continue
        
//       }

//       if(this.selectedSpeciality && this.selectedStatus ){
//         if(ELEMENT_DATA[i].speciality === this.selectedSpeciality &&
//           ELEMENT_DATA[i].status === this.selectedStatus){
//             this.filteredData.push(ELEMENT_DATA[i]);
//         }
//         continue
//       }

//       if(this.selectedSpeciality  && this.selectedConsultation){
//         if(ELEMENT_DATA[i].speciality === this.selectedSpeciality &&
//           ELEMENT_DATA[i].typeOfConsultation === this.selectedConsultation){
//             this.filteredData.push(ELEMENT_DATA[i]);
//         }
//         continue
//       }

//       if(this.selectedStatus && this.selectedConsultation){
//         if(
//           ELEMENT_DATA[i].status === this.selectedStatus && 
//           ELEMENT_DATA[i].typeOfConsultation === this.selectedConsultation){
//             this.filteredData.push(ELEMENT_DATA[i]);
//         }
//         continue
//       }
//       if(this.selectedSpeciality || this.selectedStatus || this.selectedConsultation){
//         if(this.selectedSpeciality && ELEMENT_DATA[i].speciality === this.selectedSpeciality ){
//             this.filteredData.push(ELEMENT_DATA[i]);
//             continue
//         }

//         if(
//           this.selectedStatus && ELEMENT_DATA[i].status === this.selectedStatus){
//             this.filteredData.push(ELEMENT_DATA[i]);
//             continue
//         }

//         if( 
//           this.selectedConsultation && ELEMENT_DATA[i].typeOfConsultation === this.selectedConsultation){
//             this.filteredData.push(ELEMENT_DATA[i]);
//             continue
//         }
        
//       }


//     }
//     this.dataSource = new MatTableDataSource<PeriodicElement>(this.filteredData);

//   }
  
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


export const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Kiran', pId: 10020, pNumber:'5566889900', speciality:'Cardiology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view'},
  {position: 2, name: 'Abhishek', pId: 10021, pNumber:'2244667788', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view' },
  {position: 3, name: 'Amar', pId: 10022, pNumber:'3388775555', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Offline', dateOfAppointment:'13-Jun-2022', status:'Revisit', action:'view'},
  {position: 4, name: 'Sanmitha', pId: 10023, pNumber:'7799880000', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view'},
  {position: 5, name: 'Tom', pId: 10024, pNumber:'7766557788', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Closed', action:'view'},
  {position: 6, name: 'Arjun Singh palai', pId: 1.0079, pNumber:'4466556677', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view'},
  {position: 7, name: 'John', pId: 1.0079, pNumber:'88999776655', speciality:'Cardiology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Closed', action:'view'},
  {position: 8, name: 'Sam', pId: 1.0079, pNumber:'55666443355', speciality:'Neurology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view' },
  {position: 9, name: 'Harish', pId: 1.0079, pNumber:'8899007766', speciality:'Gynacology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view'},
  {position: 10, name: 'Shyam', pId: 1.0079, pNumber:'4466557766', speciality:'Neurology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-Jun-2022', status:'Revisit', action:'view'},
  {position: 11, name: 'Marius', pId: 1.0079, pNumber:'4455336655', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-Jun-2022', status:'Revisit', action:'view'},
  {position: 12, name: 'Bhuvan', pId: 1.0079, pNumber:'1133224455', speciality:'Gynacology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Offline', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view'},
  {position: 13, name: 'Steve', pId: 1.0079, pNumber:'9963661535', speciality:'Neurology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Offline', dateOfAppointment:'13-Jun-2022', status:'Revisit', action:'view'},
  {position: 14, name: 'Praveen', pId: 1.0079, pNumber:'9963661535', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Closed', action:'view' },
  {position: 15, name: 'Umakanth', pId: 1.0079, pNumber:'9963661535', speciality:'Gynacology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Offline', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view'},
  {position: 16, name: 'Ramana', pId: 1.0079, pNumber:'9963661535', speciality:'Cardiology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view'},
  {position: 17, name: 'Srikanth', pId: 1.0079, pNumber:'9963661535', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Closed', action:'view'},
  {position: 18, name: 'Pramod', pId: 1.0079, pNumber:'9963661535', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Closed', action:'view'},
  {position: 19, name: 'Peter', pId: 1.0079, pNumber:'9963661535', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Online', dateOfAppointment:'13-Jun-2022', status:'Revisit', action:'view'},
  {position: 20, name: 'Devin', pId: 1.0079, pNumber:'554433433', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Closed', action:'view' },
  {position: 21, name: 'Shilpa', pId: 1.0079, pNumber:'2244335566', speciality:'Cardiology',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Closed', action:'view'},
  {position: 22, name: 'Giri', pId: 1.0079, pNumber:'2211334433', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Closed', action:'view'},
  {position: 23, name: 'Vishnu', pId: 1.0079, pNumber:'2233445566', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view'},
  {position: 24, name: 'Vamsi', pId: 1.0079, pNumber:'1122334455', speciality:'ENT',consultedDoctor:'Ram Murthy Rao', 
  typeOfConsultation:'Tele Consultation', dateOfAppointment:'13-Jun-2022', status:'Open', action:'view'},
];