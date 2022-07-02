import { Component, Input, OnInit } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-note-sidebar',
  templateUrl: './note-sidebar.component.html',
  styleUrls: ['./note-sidebar.component.scss']
})
export class NoteSidebarComponent implements OnInit {

  @Input() notesList;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Side bar list--->", this.notesList);
  }

  // noteClick(){
  //   // this.router.navigate([])
  // }

}
