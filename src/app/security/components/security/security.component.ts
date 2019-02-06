import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  public securityForm: FormGroup;
  constructor() { }

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
