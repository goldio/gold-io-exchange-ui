import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { UserWallet } from 'src/app/common/models';
import { WalletsService } from 'src/app/common/services/wallets.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { StorageService } from 'src/app/common/services/storage.service';

@Component({
	selector: 'app-balance',
	templateUrl: './balance.component.html',
	styleUrls: ['./balance.component.scss']
})
export class BalanceComponent extends BaseLayoutComponent implements OnInit {

	public isLoggedIn: boolean;

	private wallets: UserWallet[];
	public viewWallets: UserWallet[];
	public searchForm: FormGroup;

	constructor(
		private walletsService: WalletsService,
		private authService: AuthService,
		private router: Router,
		private storageService: StorageService,
	) {
		super();
	 }

	private initSearchForm(): void {
		this.searchForm = new FormGroup({
			search: new FormControl(null)
		});

		this.searchForm
			.controls['search']
			.valueChanges
			.debounceTime(500)
			.subscribe(value => {
				if (!value) {
					this.viewWallets = this.wallets;
					return;
				}

				this.viewWallets = this.wallets
					.filter(x =>
						x.coin.name.toLowerCase().includes(`${value}`.toLowerCase()) ||
						x.coin.shortName.toLowerCase().includes(`${value}`.toLowerCase()));
			});
	}

	public submitSearch(form: FormGroup): void {
		if (!form.controls['search']) {
			this.viewWallets = this.wallets;
			return;
		}

		this.viewWallets = this.wallets
			.filter(x =>
				x.coin.name.toLowerCase().includes(`${form.value['search']}`.toLowerCase()) ||
				x.coin.shortName.toLowerCase().includes(`${form.value['search']}`.toLowerCase()));
	}

	private loadWallets(): void {
		this.walletsService
			.getMe()
			.subscribe(res => {
				if (!res.success) {
					// alert(res.message);
					return;
				}

				this.wallets = res.data;
				this.viewWallets = this.wallets;
			});
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

			this.loadWallets();
			this.initSearchForm();
	}

	public routeToDeposit(wallet: UserWallet) {
		this.storageService.changeUserWallet(wallet);
		this.router.navigate(['/balanceDeposit']);
	}
	public routeToWithdrawal(wallet: UserWallet) {
		this.storageService.changeUserWallet(wallet);
		this.router.navigate(['/balanceWithdrawal']);
	}
}
