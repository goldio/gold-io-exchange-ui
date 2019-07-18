import { Component, OnInit, Input } from '@angular/core';
import { Trader } from '../model/trader.model';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.scss']
})
export class TraderComponent implements OnInit {
  @Input() trader:Trader;
  constructor() { }

  ngOnInit() {
  }

}
