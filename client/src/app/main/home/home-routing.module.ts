import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home.component";
import { NotesComponent } from "./notes/notes.component";


const routes: Routes = [
  {path:'', component:HomeComponent, 
  children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'notes',loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)}
]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
