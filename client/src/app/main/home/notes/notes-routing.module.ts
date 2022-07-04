import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesEditorComponent } from './notes-editor/notes-editor.component';
import { NotesComponent } from './notes.component';

const routes: Routes = [
  { path: '', component: NotesComponent, 
  
  children:[{
    path:':id', component:NotesEditorComponent
  },]
  

}
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
