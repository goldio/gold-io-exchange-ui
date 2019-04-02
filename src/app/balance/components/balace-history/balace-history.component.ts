import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BalanceService } from '../../services/balance.service';
import { BalanceHistory } from '../../models/history.model';
import { BaseLayoutComponent } from '../../../common/components/base-layout.component';
import { AuthService } from '../../../common/services/auth.service';

@Component({
  selector: 'app-balace-history',
  templateUrl: './balace-history.component.html',
  styleUrls: ['./balace-history.component.scss']
})
export class BalaceHistoryComponent extends BaseLayoutComponent implements OnInit {

  public isLoggedIn: boolean;

  public viewDeposit:BalanceHistory[];
  public viewWithdrawal:BalanceHistory[];

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private balanceService:BalanceService
  ) { 
    super();
  }

  ngOnInit() {
    this.authService
		.isLoggedIn
		.subscribe(logged => {
			this.isLoggedIn = logged;
		});

		if (!this.isLoggedIn) {
			this.router.navigate(['/authorization']);
    }
    this.getInfoDeposit();
    this.getInfoWithdrawal();
  }

  public back(){
    // this.router.navigate(['/balanceDeposit']);
    this.location.back();
  }

  public getInfoDeposit(){
    this.balanceService.getHistoryDeposit().subscribe(res => {
      if (!res.success) {
        // alert(res.message);
        return;
      }
      this.viewDeposit = res.data;
      // console.log(this.viewDeposit);
      
    });
  }

  public getInfoWithdrawal(){
    this.balanceService.getHistoryWithdrawal().subscribe(res => {
      if (!res.success) {
        // alert(res.message);
        return;
      }
      this.viewWithdrawal = res.data;
      // console.log(this.viewWithdrawal);
    });
  }
}
