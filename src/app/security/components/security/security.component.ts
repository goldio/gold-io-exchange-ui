import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent extends BaseLayoutComponent implements OnInit {

  public isLoggedIn: boolean;
  public qrContent;
  public qrContentValue: string = "svetlana";
  public securityForm: FormGroup;

  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    super();
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
