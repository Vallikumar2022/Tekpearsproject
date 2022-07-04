import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "src/app/common/angular-materail/app.material.module";
import { CardComponent } from "./dashboard/card/card.component";
import { PatientRegistrationFormComponent } from "./dashboard/card/patient-registration-form/patient-registration-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DeleteDialogComponent } from "./dashboard/delete-dialog/delete-dialog.component";
import { PatientInfoDailogComponent } from "./dashboard/patient-info-dailog/patient-info-dailog.component";
import { PrescriptionDialogComponent } from "./dashboard/prescription-dialog/prescription-dialog.component";
import { ViewPatientsHistoryDailogComponent } from "./dashboard/view-patients-history-dailog/view-patients-history-dailog.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NotesModule } from "./notes/notes.module";


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    CardComponent,
    PatientInfoDailogComponent,
    PatientRegistrationFormComponent,
    PrescriptionDialogComponent,
    DeleteDialogComponent,
    ViewPatientsHistoryDailogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NotesModule
  ]
})
export class HomeModule { }
