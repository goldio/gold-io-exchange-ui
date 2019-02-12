import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/common/services/storage.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { WalletsService } from 'src/app/common/services/wallets.service';
import { UserWallet } from 'src/app/common/models';
import { DepositResponse } from '../../models/deposit-response.model';
import { BalanceService } from '../../services/balance.service';

@Component({
  selector: 'app-balance-deposit',
  templateUrl: './balance-deposit.component.html',
  styleUrls: ['./balance-deposit.component.scss']
})
export class BalanceDepositComponent extends BaseLayoutComponent implements OnInit {

  public depositID: number;
  public qrContent;
  public qrContentValue: string = "svetlana";
  public viewBalance:string = "";
  public wallet: UserWallet;
  public deposit: string;

  constructor(
    private storageService: StorageService,
    private router:Router,
    private walletsService: WalletsService,
    private balanceService:BalanceService
  ) {
    super();
  }

  ngOnInit() {
    this.loadDepositID();
    this.loadWallets();
    this.loadDeposit();
    
  }
  private loadDepositID() {

		this.storageService.currentUserWallet
			.subscribe(Id => {
				if (!Id)
					return;
          this.depositID = Id.id;
          if(!this.depositID){
            this.router.navigate(['/balance']);
          }
			},
				error => console.log(error),
      );
			
	}

  public back(){
    this.router.navigate(['/balance']);
  }

  public copyToClipboard(str : string) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

  }

  private loadWallets(): void {
		this.walletsService
			.getMe()
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
					return;
				}

        this.wallet = res.data.find(x=> x.id == this.depositID);
        this.viewBalance = this.wallet.balance.toFixed(8);
        console.log(this.wallet);
			});
	}
  
  public loadDeposit(){
    this.balanceService
    .getDeposit(this.depositID)
    .subscribe(res => {
      if (!res.success) {
        alert(res.message);
        return;
      }
      this.deposit = res.address;
    });
  }
}
