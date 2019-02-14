import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { ChangePassword } from '../../models/changePassword.model';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent extends BaseLayoutComponent implements OnInit {

  public isLoggedIn: boolean;
  public qrContent;
  public qrContentValue: string = "svetlana";
  public securityForm: FormGroup;

  public updateRes:boolean = false;
	public updateResText : string;
  public successfullyChanged = false;
  
  public wrongPassword = false;

  public passwordErrorText: string;

	public easy = false;
	public short = false;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private securityService:SecurityService
  ) {
    super();
   }

  ngOnInit() {

    this.authService
    .isLoggedIn
    .subscribe(logged => {
      this.isLoggedIn = logged;
    });

  if (!this.isLoggedIn) {
    this.router.navigate(['/authorization']);
  }
  this.initSecurityForm();
    
  }
  private initSecurityForm(): void {
		this.securityForm = new FormGroup({
      lastPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
			confirmNewPassword: new FormControl(null, [Validators.required])
		});
  }
  
  public submitSecurityForm(form: FormGroup): void {
		
		if (form.invalid) {
			this.markContolsAsTouched() ;
			return;
    }
    if (this.wrongPassword) {
			return;
    }
		
		const req = new ChangePassword();
		req.oldPassword = form.value['lastPassword'];
		req.newPassword = form.value['newPassword'];
		req.repeatPassword = form.value['confirmNewPassword'];
		this.securityService
			.updatePassword(req)
			.subscribe(res => {
				if (!res.success) {
					this.updateResText = res.message;
					this.updateRes = true;
					this.successfullyChanged = false;
					setTimeout(() => {
						this.updateRes = false;
						this.updateResText = '';
					}, 3000);
						return;
				}
				this.updateRes = true;
				this.updateResText = res.message;
				this.successfullyChanged = true;
				setTimeout(() => {
					this.updateRes = false;
					this.successfullyChanged = false;
					this.updateResText = "";
				}, 3000);
			});
	}
  public markContolsAsTouched() {
		this.securityForm.controls['lastPassword'].markAsTouched();
    this.securityForm.controls['newPassword'].markAsTouched();
    this.securityForm.controls['confirmNewPassword'].markAsTouched();
  }
  
  public checkPasswords(){
    // wrongPassword
    if(this.securityForm.controls['newPassword'].value != this.securityForm.controls['confirmNewPassword'].value){
      this.wrongPassword = true;
    }else{
      this.wrongPassword = false;
    }
  }

    public hardPassword(){
     
				// if (this.securityForm.controls['newPassword'].value.search(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
				// 	this.passwordErrorText = "Your password is easy!" ;
				// 	this.easy = true;
				// }else{
				// 	this.easy = false;
				// }
		
				// if (this.securityForm.controls['newPassword'].value.length < 8){
				// 	this.passwordErrorText = "Your password is too short!" ;
				// 	this.short = true;
				// }else{
				// 	this.short = false;
				// }
			
    }
  
}
