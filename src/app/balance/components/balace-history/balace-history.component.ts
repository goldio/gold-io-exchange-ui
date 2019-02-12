import { Component, OnInit } from '@angular/core';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-balace-history',
  templateUrl: './balace-history.component.html',
  styleUrls: ['./balace-history.component.scss']
})
export class BalaceHistoryComponent extends BaseLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location
  ) { 
    super();
  }

  ngOnInit() {
  }

  public back(){
    // this.router.navigate(['/balanceDeposit']);
    this.location.back();
  }

}
