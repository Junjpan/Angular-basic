import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dates:object[];

  constructor() { 
    this.dates=[{year:2017,month:1},{year:2017,month:2},{year:2017,month:3}]
  }

  ngOnInit() {

  }

}
