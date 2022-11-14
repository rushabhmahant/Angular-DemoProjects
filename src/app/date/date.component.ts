import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentDate = new Date();
  onClick(){
    console.log("Today's date is: " + this.currentDate);
    alert("Today's date is: " + this.currentDate);
  }

}
