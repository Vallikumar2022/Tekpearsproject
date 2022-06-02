import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from '../common/angular-materail/app.material.module';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { CardComponent } from './home/dashboard/card/card.component';
import { PatientInfoDailogComponent } from './home/dashboard/patient-info-dailog/patient-info-dailog.component';
import { PatientRegistrationFormComponent } from './home/dashboard/card/patient-registration-form/patient-registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    CardComponent,
    PatientInfoDailogComponent,
    PatientRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
