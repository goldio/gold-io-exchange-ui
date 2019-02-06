import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ChangeRecoveryPasswordRequest } from 'src/app/common/models/request/change-recovery-password-request.model';

@Component({
	selector: 'app-recovery',
	templateUrl: './recovery.component.html',
	styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

	public recoveryPassForm: FormGroup;
	public key:string;
	public passwordErrorText:string;

	private initRecoveryPassForm(): void {
		this.recoveryPassForm = new FormGroup({
			password: new FormControl(null, [Validators.required]),
			confirmPassword: new FormControl(null, [Validators.required])
		});
	}

	constructor(
		private activatedRoute: ActivatedRoute,
		private authService: AuthService,
		private router: Router
	) { }

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
		this.initRecoveryPassForm();

		
	}

	public submitRecoveryPassForm(form: FormGroup): void {
		if (form.invalid) {
			this.markControlsAsTouched();
			return;
		}
		this.recoveryPassForm.controls['password']
			.valueChanges
			.debounceTime(1000)
			.subscribe(value => {
	  
				if (value.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/)|| (value.length < 8)){
				return
				}
			});
		if (form.value.password !== form.value.confirmPassword) {
			form.controls['confirmPassword'].setErrors({
				doNotMatch: true
			});
			setTimeout(() => {
				form.controls['confirmPassword'].setErrors({
					doNotMatch: false
				});
			}, 3000);
			return;
		}
		let changPpass:ChangeRecoveryPasswordRequest ={
			password: form.value['password'],
			 key: this.key
		}
		this.authService
			.recoveryPassword(changPpass)
			.subscribe(res =>{
				if (!res.success) {
					this.router.navigate(['/authorization'], { queryParams: { passwordChanged: false } });
					return;
				}

				this.router.navigate(['/authorization'], { queryParams: { passwordChanged: true } });
			})
	
	}

	public markControlsAsTouched() {
		this.recoveryPassForm.controls['password'].markAsTouched();
		this.recoveryPassForm.controls['confirmPassword'].markAsTouched();
	}
	private checkKey() {
		this.activatedRoute.queryParams
			.subscribe((params: Params) => {
				if (params['key']) {
					this.key = params['key'];
				}
			});
	}
	
	public checkPassword(){
		this.recoveryPassForm.controls['password']
			.valueChanges
			.debounceTime(1000)
			.subscribe(value => {
	  
				if (value.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/)){
					this.passwordErrorText = "Your password is easy!" ;
					this.recoveryPassForm.controls['password'].setErrors({
						easy: true
					});
					setTimeout(() => {
						this.recoveryPassForm.controls['password'].setErrors({
							easy: false
						});
					}, 5000);
				  }
		  
				if (value.length < 8){
				this.passwordErrorText = "Your password is too short!" ;
				this.recoveryPassForm.controls['password'].setErrors({
					easy: true
				});
				setTimeout(() => {
					this.recoveryPassForm.controls['password'].setErrors({
						easy: false
					});
				}, 5000);
				}
				
			});
	}
}
