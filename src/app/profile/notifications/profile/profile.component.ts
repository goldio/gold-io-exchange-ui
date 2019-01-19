import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { PersonsService } from '../../services/persons.service';
import { Person } from 'src/app/common/models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

	public isLoggedIn: boolean;
	public person: Person;

	public profileForm: FormGroup;

	private loadPerson(): void {
		if (!this.isLoggedIn) {
			return;
		}

		this.personsService
			.getMe()
			.subscribe(res => {
				if (!res.success) {
					return;
				}

				this.person = res.data;
				this.passPersonToForm();
			});
	}

	private initProfileForm(): void {
		this.profileForm = new FormGroup({
			fullName: new FormControl(null),
			email: new FormControl(null),
			phoneNumber: new FormControl(null),
			country: new FormControl(null),
			city: new FormControl(null),
			address: new FormControl(null)
		});
	}

	private passPersonToForm(): void {
		this.profileForm
			.setValue({
				fullName: this.person.fullName,
				email: this.person.email,
				phoneNumber: this.person.phoneNumber,
				country: null,
				city: null,
				address: this.person.address
			});
	}

	constructor(
		private authService: AuthService,
		private personsService: PersonsService,
		private router: Router
	) { }

	ngOnInit() {
		this.authService
			.isLoggedIn
			.subscribe(logged => {
				this.isLoggedIn = logged;
			});

		if (!this.isLoggedIn) {
			this.router.navigate(['/authorization']);
		}

		this.initProfileForm();
		this.loadPerson();
	}

	ngAfterViewInit() {
		
	}
}
