import { Component, OnInit } from '@angular/core';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';

@Component({
  selector: 'app-sucessfull-sent-email-password',
  templateUrl: './sucessfull-sent-email-password.component.html',
  styleUrls: ['./sucessfull-sent-email-password.component.scss']
})
export class SucessfullSentEmailPasswordComponent extends BaseLayoutComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
