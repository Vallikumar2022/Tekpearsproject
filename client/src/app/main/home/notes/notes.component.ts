import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesList = []
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {

    this.notesList = this.notesService.getNotesList();
  }

}
