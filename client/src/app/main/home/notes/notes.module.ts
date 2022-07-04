import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesEditorComponent } from './notes-editor/notes-editor.component';
import { NoteSidebarComponent } from './note-sidebar/note-sidebar.component';
import { AppMaterialModule } from 'src/app/common/angular-materail/app.material.module';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    NotesComponent,
    NotesEditorComponent,
    NoteSidebarComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    AppMaterialModule,
    NgxEditorModule
  ],
  schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class NotesModule { }
