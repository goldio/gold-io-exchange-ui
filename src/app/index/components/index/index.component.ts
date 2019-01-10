import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { WebsocketService } from 'src/app/common/services/websocket.service';
import { TradeHistoryItem } from '../../models';

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

  public tradeHistory: TradeHistoryItem[] = [];

  constructor(
    private websocketService: WebsocketService
  ) {
    this.websocketService
      .pairStreamMessage
      .subscribe(msg => {
        if (msg) {
          const messageData = JSON.parse(msg.data);

          if (messageData['e'] == "trade") {
            this.tradeHistory.unshift(new TradeHistoryItem(messageData['p'], messageData['q'], "13:56:02", messageData['m']));
          }
        }
      });
  }

  ngOnInit() {
    new Swiper('.swiper-container', {
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
