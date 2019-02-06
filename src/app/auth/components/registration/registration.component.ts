import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/common/components/base.component';
import { SignUpRequest } from 'src/app/common/models/request';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends BaseComponent implements OnInit {

	public checkErr = false;

	public signUpForm: FormGroup;

	public emailErrorText: string;
	public passwordErrorText: string;

	private initSignUpForm(): void {
		this.signUpForm = new FormGroup({
			fullName: new FormControl(null),
			password: new FormControl(null, [Validators.required]),
			email: new FormControl(null, [Validators.required, Validators.email]),
			agreeBox: new FormControl(null, [Validators.required])
			
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

			this.signUpForm.controls['password']
			.valueChanges
			.debounceTime(1000)
			.subscribe(value => {
	  
			  if (value.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/)){
				this.passwordErrorText = "Your password is easy!" ;
				this.signUpForm.controls['password'].setErrors({
					easy: true
				});
				setTimeout(() => {
					this.signUpForm.controls['password'].setErrors({
						easy: false
					});
				}, 5000);
			  }
	  
			  if (value.length < 8){
				this.passwordErrorText = "Your password is too short!" ;
				this.signUpForm.controls['password'].setErrors({
					easy: true
				});
				setTimeout(() => {
					this.signUpForm.controls['password'].setErrors({
						easy: false
					});
				}, 5000);
			  }
			});
	}

	public submitRegistration(form: FormGroup): void {
		if (form.invalid) {
			this.markContolsAsTouched();
			if (form.controls['agreeBox'].invalid) {
				this.checkErr = true;
				setTimeout(() => {
					this.checkErr = false;
				}, 3000);
	
				return;
			}
			return;
		}

		this.signUpForm.controls['password']
			.valueChanges
			.debounceTime(1000)
			.subscribe(value => {
	  
				if (value.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/)){
					this.passwordErrorText = "Your password is easy!" ;
					this.signUpForm.controls['password'].setErrors({
						easy: true
					});
					setTimeout(() => {
						this.signUpForm.controls['password'].setErrors({
							easy: false
						});
					}, 5000);
				  }
		  
				if (value.length < 8){
				this.passwordErrorText = "Your password is too short!" ;
				this.signUpForm.controls['password'].setErrors({
					easy: true
				});
				setTimeout(() => {
					this.signUpForm.controls['password'].setErrors({
						easy: false
					});
				}, 5000);
				}
				if (value.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/) || (value.length < 8)){
					return;
				}
			});
		let req :SignUpRequest = {
			fullName: form.controls['fullName'].value,
			email: form.controls['email'].value,
			password: form.controls['password'].value,
		};
		this.authService
			.registration(req)
			.subscribe(res => {
				if (!res.success) {
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
		this.signUpForm.controls['agreeBox'].markAsTouched();
	}

	
}
