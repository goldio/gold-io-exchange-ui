import { Component, OnInit, Input } from '@angular/core';
import { CompetitionsComponent } from '../competitions.component';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  @Input() competition;
  constructor() { }

  ngOnInit() {
  }

}
