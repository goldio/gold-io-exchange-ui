import { Component, OnInit } from '@angular/core';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { UserSession } from '../../models/user-session.model';
import { WallenOperation } from '../../models/wallet-operation.model';
import { ActivityService } from './services/activity.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent extends BaseLayoutComponent implements OnInit {
  public activity:boolean = true; 
  public isLoggedIn: boolean;
  public userSession: UserSession[];
  public wallenOperation: WallenOperation[];

  constructor(
    private activityService: ActivityService,
    private authService: AuthService,
    private router: Router,
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
    

    this.getWallets();
    this.getSessions();
  }

  public getWallets(){
    this.activityService.getOperations().subscribe(res => {
      if(!res.success){
        alert('error');
      }
      this.wallenOperation = res.data;
      console.log(this.wallenOperation);
    })
  }

  public getSessions(){
    this.activityService.getlogin().subscribe(res => {
      if(!res.success){
        alert('error');
      }
      this.userSession = res.data;
      console.log(this.userSession);
    })
  }

}
