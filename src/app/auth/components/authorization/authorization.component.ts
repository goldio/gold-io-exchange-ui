import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BaseComponent } from 'src/app/common/components/base.component';

@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent extends BaseComponent implements OnInit {

	public emailErrorText: string;
	public signInForm: FormGroup;
	public showPassMessage: boolean= false;
	public showPassMessageText:string;
	private initSignInForm(): void {
		this.signInForm = new FormGroup({
			login: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null, [Validators.required])
		});
	}

	constructor(
		private authService: AuthService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) { 
		super();
	}

	ngOnInit() {
		this.authService
		.isLoggedIn
		.subscribe(logged => {
			if (logged) {
				this.router.navigate(['/index']);
				return;	
			}
		});
		this.checkKey();
		this.initSignInForm();
	}

	public submitAuthorization(form: FormGroup): void {
		if (form.invalid) {
			this.markContolsAsTouched();
			return;
		}

		this.authService
			.authorization(form.value)
			.subscribe(res => {
				if (!res.success) {
					this.emailErrorText = res.message ;
					form.controls['login'].setErrors({
						email: true
					});
					setTimeout(() => {
						form.controls['login'].setErrors({
							email: false
						});
					}, 3000);
					
					// this.showError(res.message, this.signInForm.controls['email'], 'email' );
					return;
				}

				this.router.navigate(['/index']);
			});
	}

	public markContolsAsTouched() {
		this.signInForm.controls['login'].markAsTouched();
		this.signInForm.controls['password'].markAsTouched();
	  }

	  private checkKey() {

		this.activatedRoute.queryParams
			.subscribe((params: Params) => {

				if (params.passwordChanged) {
					this.showPassMessage = true;
					this.showPassMessageText  = 'password successfully changed';
					setTimeout(() => {
						this.showPassMessage = false;
					}, 5000);
				}
				if (!params.passwordChanged) {
					this.showPassMessage = true;
					this.showPassMessageText  = 'password change error';
					setTimeout(() => {
						this.showPassMessage = false;
					}, 5000);
				}
				if (params.activation) {
					this.showPassMessage = true;
					this.showPassMessageText  = 'Your account has been successfully activated';
					setTimeout(() => {
						this.showPassMessage = false;
					}, 5000);
				}
				if (!params.activation) {
					this.showPassMessage = true;
					this.showPassMessageText  = 'Your account is already activated';
					setTimeout(() => {
						this.showPassMessage = false;
					}, 5000);
				}
				
			});
	}


}
