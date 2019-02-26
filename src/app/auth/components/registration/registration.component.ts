import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { SignUpRequest } from 'src/app/common/models/request';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends BaseLayoutComponent implements OnInit {
	public loader = false;

	public checkErr = false;
	public emailError = false;
	public signUpForm: FormGroup;

	public emailErrorText: string;
	public passwordErrorText: string;

	// public easy = false;
	public short = false;

	private initSignUpForm(): void {
		this.signUpForm = new FormGroup({
			fullName: new FormControl(null, [Validators.required]),
			password: new FormControl(null, [Validators.required]),
			email: new FormControl(null, [Validators.required, Validators.email]),
			agreeBox: new FormControl(null,[Validators.required])
			
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
			
			
			if (form.controls['agreeBox'].invalid) {
				alert('11');
				this.checkErr = true;
				setTimeout(() => {
					this.checkErr = false;
				}, 3000);
	
				return;
			}
			return;
		}
		if(this.short){
			return;
		}
		let req :SignUpRequest = {
			fullName: form.controls['fullName'].value,
			email: form.controls['email'].value,
			password: form.controls['password'].value,
		};
		this.loader = true;
		this.authService
			.registration(req)
			.subscribe(res => {
				if (!res.success) {
					this.emailErrorText = res.message ;
					this.emailError = true;
					setTimeout(() => {
						this.emailError = false;
					}, 3000);
					this.loader = false;
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

	public chekPassLehght(){
			if (this.signUpForm.controls['password'].value.length < 8){
				this.passwordErrorText = "Your password is too short!" ;
				this.short = true;
			}else{
				this.short = false;
			}
		
	}
	
}
