import { Component, OnInit } from '@angular/core';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-balace-history',
  templateUrl: './balace-history.component.html',
  styleUrls: ['./balace-history.component.scss']
})
export class BalaceHistoryComponent extends BaseLayoutComponent implements OnInit {

  public isLoggedIn: boolean;
  
  constructor(
    private router: Router,
    private location: Location,
    private authService:AuthService
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
  }

  public back(){
    // this.router.navigate(['/balanceDeposit']);
    this.location.back();
  }

}
