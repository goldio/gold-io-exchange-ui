import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { Wallet } from 'src/app/common/models';
import { WalletsService } from 'src/app/common/services/wallets.service';

@Component({
	selector: 'app-balance',
	templateUrl: './balance.component.html',
	styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

	private wallets: Wallet[];
	public viewWallets: Wallet[];
	public searchForm: FormGroup;

	constructor(
		private walletsService: WalletsService
	) { }

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
					alert(res.message);
					return;
				}

				this.wallets = res.data;
				this.viewWallets = this.wallets;
			});
	}

	ngOnInit() {
		this.loadWallets();
		this.initSearchForm();
	}
}
