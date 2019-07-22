import { Component, OnInit } from '@angular/core';
import { Bot } from './model/bot.model';

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.scss']
})
export class BotsComponent implements OnInit {

  constructor() { }

  public bots:Bot[] = [
    {botId: 1, iconPath: '../assets/images/bots/bot.svg', heading: 'GoldenBot', downloads: 131241, rating: 1221},
    {botId: 2, iconPath: '../assets/images/bots/bot.svg', heading: 'RaisePraise', downloads: 12341, rating: 999},
    {botId: 3, iconPath: '../assets/images/bots/bot.svg', heading: 'CoinSplash', downloads: 91291, rating: 1854},
    {botId: 4, iconPath: '../assets/images/bots/bot.svg', heading: 'CoinHub', downloads: 11451, rating: 2308},
    {botId: 5, iconPath: '../assets/images/bots/bot.svg', heading: 'DiggerTrade', downloads: 87481, rating: 1736}
  ];
  ngOnInit() {
  }

}
