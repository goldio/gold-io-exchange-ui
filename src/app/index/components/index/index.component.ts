import { Component, OnInit } from '@angular/core';
declare var TradingView: any;
declare var Swiper: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public chart: boolean = false;
  public currencyBox: boolean = false;
  public buyCell: boolean = false;
  public responciveTabs = 2;
  constructor() { }

  ngOnInit() {
    new Swiper('.swiper-container',{
      scrollContainer: true
  }); 

    // new TradingView.widget({
    //   "autosize": true,
    //   "symbol": "COINBASE:BTCUSD",
    //   "interval": "D",
    //   "timezone": "Europe/London",
    //   "theme": "Dark",
    //   "style": "9",
    //   "locale": "en",
    //   "toolbar_bg": "rgba(9, 19, 41, 1)",
    //   "enable_publishing": false,
    //   "save_image": false,
    //   "hideideas": true
    // });
  }
 

}
