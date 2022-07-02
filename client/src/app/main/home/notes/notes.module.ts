import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesEditorComponent } from './notes-editor/notes-editor.component';
import { NoteSidebarComponent } from './note-sidebar/note-sidebar.component';
import { AppMaterialModule } from 'src/app/common/angular-materail/app.material.module';


@NgModule({
  declarations: [
    NotesComponent,
    NotesEditorComponent,
    NoteSidebarComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    AppMaterialModule
  ]
})
export class NotesModule { }
