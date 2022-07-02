import { Injectable } from '@angular/core';
import { notesList } from 'src/app/common/CommonUtils';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotesList(){
    return notesList;
  }
}
