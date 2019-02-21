import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { RecoveryRequest } from 'src/app/common/models/request/recovery-requers.model';

@Component({
	selector: 'app-change-password',
	templateUrl: './change-password.component.html',
	styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public emailErrorText: string;
	public errorResp=false;
  public recoveryEmailForm: FormGroup;
  private initRecoveryEmailForm(): void {
		this.recoveryEmailForm = new FormGroup({
			login: new FormControl(null, [Validators.required, Validators.email])
		});
	}
	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit() {
		this.initRecoveryEmailForm();
		this.authService
			.isLoggedIn
			.subscribe(logged => {
				if (logged) {
					this.router.navigate(['/index']);
					return;
				}
			});
	}

	public submitEmailForm(form: FormGroup): void {
		if (form.invalid) {
			this.markControlsAsTouched();
			return;
		}
		let formReq: RecoveryRequest={
			login: form.controls['email'].value
		}
		this.authService
			.recoveryEmail(formReq)
			.subscribe(res => {
				if (!res.success) {
          this.emailErrorText = res.message ;
					this.errorResp = true;
					setTimeout(() => {
						this.errorResp = false;
					}, 3000);
					
					return;
				}

				this.router.navigate(['/EmailPass']);
			});
	}

	public markControlsAsTouched() {
		this.recoveryEmailForm.controls['email'].markAsTouched();
	}

}
