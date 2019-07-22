import { Component, OnInit } from '@angular/core';
import { Trader } from './model/trader.model';

@Component({
  selector: 'app-traders',
  templateUrl: './traders.component.html',
  styleUrls: ['./traders.component.scss']
})
export class TradersComponent implements OnInit {

  constructor() { }

  public traders:Trader[] = [
    {id: 1, avatar: '../assets/images/traders/avatar.svg', nickname: 'f1r3base', tx: 19917, vol: 1341},
    {id: 2, avatar: '../assets/images/traders/avatar.svg', nickname: 'JackDan29', tx: 16473, vol: 1231},
    {id: 3, avatar: '../assets/images/traders/avatar.svg', nickname: 'spaceMan', tx: 16213, vol: 1521},
    {id: 4, avatar: '../assets/images/traders/avatar.svg', nickname: 'trtr2trtr', tx: 14563, vol: 1351},
    {id: 5, avatar: '../assets/images/traders/avatar.svg', nickname: 'spXrunner', tx: 12918, vol: 1121},
    {id: 6, avatar: '../assets/images/traders/avatar.svg', nickname: 'CCoinKeeper7', tx: 10331, vol: 941}
  ];
  ngOnInit() {
  }

}
