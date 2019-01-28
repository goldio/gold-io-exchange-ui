import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

	public signInForm: FormGroup;
	private initSignInForm(): void {
		this.signInForm = new FormGroup({
			login: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null, [Validators.required])
		});
	}

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit() {
		this.initSignInForm();
		this.authService
			.isLoggedIn
			.subscribe(logged => {
				if (logged) {
					this.router.navigate(['/index']);
					return;	
				}
			});
	}

	public submitAuthorization(form: FormGroup): void {
		if (form.invalid) {
			alert('form invalid');
			return;
		}

		this.authService
			.authorization(form.value)
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
					return;
				}

				this.router.navigate(['/index']);
			});
	}
}
