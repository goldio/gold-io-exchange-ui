import { Component, OnInit, Input } from '@angular/core';
import { Bot } from '../model/bot.model';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
  @Input() bot:Bot;
  constructor() { }

  public starPath:string = 'M4.5 0L5.51031 3.45492H8.77975L6.13472 5.59017L7.14503 9.04508L4.5 6.90983L1.85497 9.04508L2.86528 5.59017L0.220246 3.45492H3.48969L4.5 0Z';
  public halfStar:string = 'M4.5 0L5.51031 3.45492H8.77975L6.13472 5.59017L7.14503 9.04508L4.5 6.90983L1.85497';
  public stars = [
    {path: this.starPath},
    {path: this.starPath},
    {path: this.starPath},
    {path: this.starPath},
    {path: this.halfStar}
  ];
  ngOnInit() {
  }

}
