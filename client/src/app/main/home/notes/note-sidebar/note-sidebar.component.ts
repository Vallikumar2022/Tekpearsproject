import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-note-sidebar',
  templateUrl: './note-sidebar.component.html',
  styleUrls: ['./note-sidebar.component.scss']
})
export class NoteSidebarComponent implements OnInit {

  @Input() notesList;
  constructor(private router: Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Side bar list--->", this.notesList);
    // console.log("----->>",this.activateRoute.snapshot._routerState.url);
    this.router.events.subscribe((urlInfo)=>{
      console.log(urlInfo);
    })

  }

  notesClick(index){
    this.router.navigate([`notes/${index+1}`] )
  }

}
