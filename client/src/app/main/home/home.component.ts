import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showFiller = false;
  dashboard = 'DASHBOARD';
  navList = ['DASHBOARD', 'NOTES'];
  uNavList = [
    {
      name:'DASHBOARD',
      route:'/dashboard'
    },
    {
      name:'NOTES',
      route:'/notes'
    }
]

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor() { }

  ngOnInit(): void {
  }
}
