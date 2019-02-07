import { Component, OnInit } from '@angular/core';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent extends BaseLayoutComponent implements OnInit {
  public activity:boolean = true;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
