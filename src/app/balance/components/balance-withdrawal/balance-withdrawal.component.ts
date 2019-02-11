import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/common/services/storage.service';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';

@Component({
  selector: 'app-balance-withdrawal',
  templateUrl: './balance-withdrawal.component.html',
  styleUrls: ['./balance-withdrawal.component.scss']
})
export class BalanceWithdrawalComponent extends BaseLayoutComponent implements OnInit {

  public withdrawalID:number;

  constructor(
    private storageService: StorageService,
    private router:Router
  ) {
    super();
   }

  ngOnInit() {
    this.loadDeposit();
  }


  public back(){
    this.router.navigate(['/balance']);
  }

  private loadDeposit() {

		this.storageService.currentUserWallet
			.subscribe(Id => {
				if (!Id)
					return;

				this.withdrawalID = Id.id;
			},
				error => console.log(error),
      );
			
	}
}
