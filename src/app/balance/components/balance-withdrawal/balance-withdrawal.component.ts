import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BalanceService } from '../../services/balance.service';
import { WithdrawlRequest } from '../../models/withdrawl-request.model';
import { GetTransactionFeeRequest } from '../../models/getTransactionFeeRequest.model';
import { BaseLayoutComponent } from '../../../common/components/base-layout.component';
import { UserWallet } from '../../../common/models';
import { StorageService } from '../../../common/services/storage.service';
import { WalletsService } from '../../../common/services/wallets.service';
import { AuthService } from '../../../common/services/auth.service';

@Component({
	selector: 'app-balance-withdrawal',
	templateUrl: './balance-withdrawal.component.html',
	styleUrls: ['./balance-withdrawal.component.scss']
})
export class BalanceWithdrawalComponent extends BaseLayoutComponent implements OnInit {
	public loader = false;
	public isLoggedIn: boolean;

	public withdrawalID: number;
	public wallet: UserWallet;
	public viewBalance: string = "";

	public updateRes: boolean;
	public updateResText: string;
	public successfullyChanged: boolean;

	public amountError = false;
	public fewAmountError = false;
	public withdrawalForm: FormGroup;

	// public getAmount = '0.00000000';

	public fee = 0;
	public finalAmount = 0;

	constructor(
		private storageService: StorageService,
		private router: Router,
		private walletsService: WalletsService,
		private balanceService: BalanceService,
		private authService: AuthService

	) {
		super();
	}

	ngOnInit() {
		this.loadDepositID();
		this.initWithdrawalForm();
		this.loadWallets();
	}


	public back() {
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
				if (!Id) {
					return;
				}
				this.withdrawalID = Id.id;
				if (!this.withdrawalID) {
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
					// alert(res.message);
					return;
				}

				this.wallet = res.data.find(x => x.id == this.withdrawalID);
				this.viewBalance = this.wallet.availableBalance.toFixed(8);
				// console.log(this.wallet);
			});
	}

	public submitWithdrawalForm(form: FormGroup): void {
		console.log(form);
		if (form.invalid) {
			this.markContolsAsTouched();
			return;
		}
		if (this.amountError || this.fewAmountError) {
			return;
		}
		console.log(form);

		this.loader = true;
		const req = new WithdrawlRequest();
		req.address = form.value['address'];
		req.amount = form.value['amount'];
		this.balanceService
			.withdrawlRequest(req, this.withdrawalID)
			.subscribe(res => {
				if (!res.success) {
					// alert('error');
					this.loader = false;
				}
				this.updateRes = true;
				this.updateResText = res.message;
				this.successfullyChanged = true;
				setTimeout(() => {
					this.updateRes = false;
					this.successfullyChanged = false;
					this.updateResText = "";
					this.loader = false;
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

	public checkAmount() {
		if (this.withdrawalForm.controls['amount'].value < 0.0001) {
			this.amountError = true;
		} else {
			this.amountError = false;
		}
		if (this.withdrawalForm.controls['amount'].value > this.wallet.availableBalance) {
			this.fewAmountError = true;
		} else {
			this.fewAmountError = false;
		}
		

		if((this.wallet.coin.shortName == "BTC" || this.wallet.coin.shortName == "ETH")&&(this.withdrawalForm.controls['amount'].value <= this.wallet.availableBalance)&&(this.withdrawalForm.controls['amount'].value > 0.0001)){
			let req:GetTransactionFeeRequest = {
				coin : this.wallet.coin.shortName,
				amount: this.withdrawalForm.controls['amount'].value
			}
			this.balanceService.getFee(req).subscribe(res => {
				if(!res.success){
					alert('error');
					return;
				}
				this.fee = res.fee;
				this.finalAmount = res.finalAmount;
			});

			
		}
		
	}

}
