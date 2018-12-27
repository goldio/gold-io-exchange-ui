import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public chart: boolean = false;
  public currencyBox: boolean = false;
  public buyCell: boolean = false;
  constructor() { }

  ngOnInit() {
   
  }
 

}
