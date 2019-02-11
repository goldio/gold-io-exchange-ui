import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/common/services/storage.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';

@Component({
  selector: 'app-balance-deposit',
  templateUrl: './balance-deposit.component.html',
  styleUrls: ['./balance-deposit.component.scss']
})
export class BalanceDepositComponent extends BaseLayoutComponent implements OnInit {

  public depositID: number;
  public qrContent;
  public qrContentValue: string = "svetlana";
  
  constructor(
    private storageService: StorageService,
    private router:Router
  ) {
    super();
  }

  ngOnInit() {
    this.loadDeposit();
  }
  private loadDeposit() {

		this.storageService.currentUserWallet
			.subscribe(Id => {
				if (!Id)
					return;

				this.depositID = Id.id;
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

  };
  
}
