import { Component, OnInit } from '@angular/core';
import { Competition } from './model/competition.model';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  constructor() { }

  public competitions:Competition[] = [
    {cup: 1, time: 14, sum: 500, date: new Date()},
    {cup: 3, time: 3, sum: 50, date: new Date()},
    {cup: 5, time: 5, sum: 100, date: new Date()},
    {cup: 2, time: 2, sum: 30, date: new Date()},
    {cup: 6, time: 7, sum: 70, date: new Date()},
    {cup: 9, time: 10, sum: 700, date: new Date()}
  ];
  ngOnInit() {
  }

}
