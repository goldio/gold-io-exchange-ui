import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public emailErrorText: string;

  public recoveryEmailForm: FormGroup;
  private initRecoveryEmailForm(): void {
		this.recoveryEmailForm = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email])
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

		this.authService
			.recoveryEmail(form.value)
			.subscribe(res => {
				if (!res.success) {
          this.emailErrorText = res.message ;
					form.controls['email'].setErrors({
						email: true
					});
					setTimeout(() => {
						form.controls['email'].setErrors({
							email: false
						});
					}, 3000);
					return;
				}

				this.router.navigate(['/sucessfull']);
			});
  }
   
  public markControlsAsTouched() {
    this.recoveryEmailForm.controls['email'].markAsTouched();
  }

}
