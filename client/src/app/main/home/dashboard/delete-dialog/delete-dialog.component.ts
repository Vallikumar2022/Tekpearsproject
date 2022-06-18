import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  patientName= ''
  patientId = ''
  constructor(@Inject(MAT_DIALOG_DATA) public data) { 

    console.log(data);
  }

  ngOnInit(): void {
     this.patientName = this.data.patientData.name;
     this.patientId = this.data.patientData.pId;
  }

  delete(patientId){
    

  }

}
