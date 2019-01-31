import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/common/components/base.component';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends BaseComponent implements OnInit {

	public signUpForm: FormGroup;
	public emailErrorText: string;
	private initSignUpForm(): void {
		this.signUpForm = new FormGroup({
			fullName: new FormControl(null),
			password: new FormControl(null, [Validators.required]),
			email: new FormControl(null, [Validators.required, Validators.email])
		});
	}

	constructor(
		private authService: AuthService,
		private router: Router
	) {
		super();
	 }

	ngOnInit() {
		this.initSignUpForm();

		this.authService
			.isLoggedIn
			.subscribe(logged => {
				if (logged) {
					this.router.navigate(['/index']);
					return;	
				}
			});
	}

	public submitRegistration(form: FormGroup): void {
		if (form.invalid) {
			this.markContolsAsTouched();

			// alert('form invalid');

			return;
		}

		this.authService
			.registration(form.value)
			.subscribe(res => {
				if (!res.success) {
					// alert(res.message);
					this.emailErrorText = res.message ;
					form.controls['email'].setErrors({
						errorError: true
					});
					setTimeout(() => {
						form.controls['email'].setErrors({
							errorError: false
						});
					}, 3000);
					return;
				}

				this.router.navigate(['/sucessfull']);
				return;
			});
	}

	public markContolsAsTouched() {
		this.signUpForm.controls['fullName'].markAsTouched();
		this.signUpForm.controls['password'].markAsTouched();
		this.signUpForm.controls['email'].markAsTouched();
	  }
}
