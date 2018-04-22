import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smash-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

dateNow: Date = new Date();
hours  =  60 * 60 * 1000 ;
dateNext: Date = new Date(this.dateNow.getMilliseconds() + this.hours);

  constructor() { }

  ngOnInit() {
  }

}
