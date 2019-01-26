import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { Wallet } from 'src/app/common/models';
import { WalletsService } from '../../services/wallets.service';

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
				}

				this.viewWallets = this.wallets
					.filter(x =>
						x.coin.name.includes(value) ||
						x.coin.shortName.includes(value));
			});
	}

	public submitSearch(form: FormGroup): void {
		if (!form.controls['search']) {
			this.viewWallets = this.wallets;
		}

		this.viewWallets = this.wallets
			.filter(x =>
				x.coin.name.includes(form.value['search']) ||
				x.coin.shortName.includes(form.value['search']));
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
