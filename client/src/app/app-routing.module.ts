import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './main/home/dashboard/dashboard.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'home', loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule) },
  {path:'home/dashboard', loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)},

  { path: 'home/notes', loadChildren: () => import('./main/home/notes/notes.module').then(m => m.NotesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
