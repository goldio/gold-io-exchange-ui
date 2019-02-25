import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/common/services/storage.service';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { WalletsService } from 'src/app/common/services/wallets.service';
import { UserWallet } from 'src/app/common/models';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BalanceService } from '../../services/balance.service';
import { WithdrawlRequest } from '../../models/withdrawl-request.model';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-balance-withdrawal',
  templateUrl: './balance-withdrawal.component.html',
  styleUrls: ['./balance-withdrawal.component.scss']
})
export class BalanceWithdrawalComponent extends BaseLayoutComponent implements OnInit {

  public isLoggedIn: boolean;
  
  public withdrawalID:number;
  public wallet: UserWallet;
  public viewBalance:string = "";

  public updateRes:boolean;
  public updateResText:string;
  public successfullyChanged:boolean;

  public amountError = false;
  public fewAmountError = false;
  public withdrawalForm: FormGroup;

  public getAmount = '0.00000000';

  constructor(
    private storageService: StorageService,
    private router:Router,
    private walletsService: WalletsService,
    private balanceService:BalanceService,
    private authService:AuthService

  ) {
    super();
   }

  ngOnInit() {
    this.loadDepositID();
    this.loadWallets();
    this.initWithdrawalForm();
  }


  public back(){
    this.router.navigate(['/balance']);
  }

 
  
  private loadDepositID() {
    this.authService
		.isLoggedIn
		.subscribe(logged => {
			this.isLoggedIn = logged;
		});

		if (!this.isLoggedIn) {
			this.router.navigate(['/authorization']);
    }
		this.storageService.currentUserWallet
			.subscribe(Id => {
        if (!Id){
            return;
        }
        this.withdrawalID = Id.id;
        if(!this.withdrawalID){
          this.router.navigate(['/balance']);
        }
			},
				error => console.log(error),
      );
			
  }
  
  private loadWallets(): void {
		this.walletsService
			.getMe()
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
					return;
				}

        this.wallet = res.data.find(x=> x.id == this.withdrawalID);
        this.viewBalance = this.wallet.balance.toFixed(8);
        // console.log(this.wallet);
			});
  }

  public submitWithdrawalForm(form: FormGroup): void {
		
		if (form.invalid) {
			this.markContolsAsTouched() ;
			return;
    }
    if(!this.amountError || !this.fewAmountError){
      return;
    }
		
		
		const req = new WithdrawlRequest();
		req.address = form.value['address'];
		req.amount = form.value['amount'];
		this.balanceService
			.withdrawlRequest(req, this.withdrawalID)
			.subscribe(res => {
				if (!res.success) {
					alert('error');
				}
				this.updateRes = true;
				this.updateResText = res.message;
				this.successfullyChanged = true;
				setTimeout(() => {
					this.updateRes = false;
					this.successfullyChanged = false;
					this.updateResText = "";
        }, 3000);
        this.withdrawalForm.reset();
			});
	}

	public markContolsAsTouched() {
		this.withdrawalForm.controls['address'].markAsTouched();
		this.withdrawalForm.controls['amount'].markAsTouched();
  }
  
  private initWithdrawalForm(): void {
		this.withdrawalForm = new FormGroup({
			address: new FormControl(null, [Validators.required]),
			amount: new FormControl(null, [Validators.required])
		});
  }
  
  public checkAmount(){
    if(this.withdrawalForm.controls['amount'].value < 0.2){
      this.amountError = true;
    }else{
      this.amountError = false;
    }
    if(this.withdrawalForm.controls['amount'].value > this.wallet.balance){
      this.fewAmountError = true;
    }else{
      this.fewAmountError = false;
    }
    if(this.withdrawalForm.controls['amount'].value!=0){
      this.getAmount = (this.withdrawalForm.controls['amount'].value-0.00005000).toFixed(8);
    }
  }
  
}
