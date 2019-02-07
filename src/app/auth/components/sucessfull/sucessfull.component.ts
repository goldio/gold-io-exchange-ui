import { Component, OnInit } from '@angular/core';
import { BaseLayoutComponent } from 'src/app/common/components/base.component';

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
