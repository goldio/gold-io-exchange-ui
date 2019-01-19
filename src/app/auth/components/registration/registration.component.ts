import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

	public signUpForm: FormGroup;

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
	) { }

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
			alert('form invalid');
			return;
		}

		this.authService
			.registration(form.value)
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
					return;
				}

				alert('OK');
				return;
			});
	}
}
