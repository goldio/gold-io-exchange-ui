import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseLayoutComponent } from 'src/app/common/components/base.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent extends BaseLayoutComponent implements OnInit {

  public securityForm: FormGroup;
  constructor() {
    super();
  }

  ngOnInit() {
    this.initSecurityForm();
    this.securityForm.controls['secretCode'].setValue('JFCEMRBSGJHUUTKV');
  }

  private initSecurityForm(): void {
		this.securityForm = new FormGroup({
			verification: new FormControl(),
      secretCode: new FormControl(),
      authenticator: new FormControl(),
			lastPassword: new FormControl(),
			newPassword: new FormControl(),
      confirmNewPassword: new FormControl()
		});
	}

}
