import { Component, OnInit } from '@angular/core';
declare var jquery: any;
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
  }
 

}
