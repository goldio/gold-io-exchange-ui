import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseLayoutComponent } from 'src/app/common/components/base.component';

@Component({
  selector: 'app-api-keys',
  templateUrl: './api-keys.component.html',
  styleUrls: ['./api-keys.component.scss']
})
export class ApiKeysComponent extends BaseLayoutComponent implements OnInit {

  public settings:boolean = false;

  public copyText= "JKSlfdsi352dvd5fm3ZXi";
  public apiForm: FormGroup;
  constructor() {
    super();
  }

  ngOnInit() {
    this.initProfileForm();
    this.apiForm.controls['api'].setValue(this.copyText);
    this.apiForm.controls['secretCode'].setValue(this.copyText);
  }

	private initProfileForm(): void {
		this.apiForm = new FormGroup({
			api: new FormControl(),
			secretCode: new FormControl(),
			viewAccInfo: new FormControl(),
			redOrder: new FormControl(),
			withdrawFunds: new FormControl()
		});
	}

  public copyToClipboard(str = this.copyText) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

  };
}
