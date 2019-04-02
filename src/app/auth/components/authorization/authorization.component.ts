import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BaseLayoutComponent } from '../../../common/components/base-layout.component';
import { AuthService } from '../../../common/services/auth.service';
import { SignInRequest } from '../../../common/models/request';

@Component({
	selector: 'app-authorization',
	templateUrl: './authorization.component.html',
	styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent extends BaseLayoutComponent implements OnInit {

	public loader = false;

	public emailError=false;
	public remember = false;
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
		let auth:SignInRequest={
			login:form.controls['login'].value,
			password:form.controls['password'].value,
			remember: this.remember
		}
		if (form.invalid) {
			this.markContolsAsTouched();
			// console.log(form);
			return;
		}
		this.loader = true;
		this.authService
			.authorization(auth)
			.subscribe(res => {
				if (!res.success) {
					this.emailErrorText = res.message ;
					this.emailError = true;
					setTimeout(() => {
						this.emailError = false;
					}, 3000);
					this.loader = false;
					// this.showError(res.message, this.signInForm.controls['email'], 'email' );
					return;
				}
				
				this.router.navigate(['/index']);
			});
			this.loader = false;
	}

	public markContolsAsTouched() {
		this.signInForm.controls['login'].markAsTouched();
		this.signInForm.controls['password'].markAsTouched();
	  }

	  private checkKey() {

		this.activatedRoute.queryParams
			.subscribe((params: Params) => {
				// console.log(params);
				if (params.passwordChanged == "true") {
					this.showPassMessage = true;
					this.showPassMessageText  = 'password successfully changed';
					setTimeout(() => {
						this.showPassMessage = false;
					}, 5000);
					return;
				}
				if (params.passwordChanged == "false") {
					this.showPassMessage = true;
					this.showPassMessageText  = 'password change error';
					setTimeout(() => {
						this.showPassMessage = false;
					}, 5000);
					return;
				}
				if (params.activation == "true") {
					this.showPassMessage = true;
					this.showPassMessageText  = 'Your account has been successfully activated';
					setTimeout(() => {
						this.showPassMessage = false;
					}, 5000);
					return;
				}
				if (params.activation == "false") {
					this.showPassMessage = true;
					this.showPassMessageText  = 'Your account is already activated';
					setTimeout(() => {
						this.showPassMessage = false;
					}, 5000);
					return;
				}
				
			});
	}

	public rememberChange(){
		this.remember = !this.remember;
	}
}
