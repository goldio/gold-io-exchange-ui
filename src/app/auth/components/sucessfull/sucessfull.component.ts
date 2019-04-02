import { Component, OnInit } from '@angular/core';
import { BaseLayoutComponent } from '../../../common/components/base-layout.component';

@Component({
  selector: 'app-sucessfull',
  templateUrl: './sucessfull.component.html',
  styleUrls: ['./sucessfull.component.scss']
})
export class SucessfullComponent extends BaseLayoutComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
