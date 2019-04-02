import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from '../../services/persons.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';
import { BaseLayoutComponent } from '../../../common/components/base-layout.component';
import { Country, City, Person } from '../../../common/models';
import { Theme } from '../../../common/enums';
import { AuthService } from '../../../common/services/auth.service';
import { ThemeService } from '../../../common/services/theme.service';
import { UpdatePersonRequest } from '../../../common/models/request';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends BaseLayoutComponent implements OnInit {
	public loader = false;
	public isLoggedIn: boolean;

	public scrollbarOptions = { axis: 'yx', theme: 'minimal' };

	public maxDate: any = moment().subtract(18, 'years').toDate();

	private countries: Country[];
	private cities: City[];
	
	public person: Person;
	public viewCountries: Country[];
	public viewCities: City[];

	public profileForm: FormGroup;

	public showCountriesDropdown: boolean = false;
	public showCitiesDropdown: boolean = false;

	public theme: Theme;
	public calendarTheme: string;

	public updateRes:boolean = false;
	public updateResText : string;
	public successfullyChanged = false;

	public dateB:Date;
	public dateView: any;
	public dateBError = false;
	
	public windowWidth:boolean= false;

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
				this.dateB = res.data.birthDate;
				if(this.dateB.toString() !='0001-01-01T00:00:00'){
					this.dateView = new Date(this.dateB).toISOString();
				}
				this.passPersonToForm();
			});
	}

	private loadCountries(): void {
		this.countriesService
			.getCountries()
			.subscribe(res => {
				if (!res.success) {
					//alert(res.message);
					return;
				}

				this.countries = res.data;
				this.viewCountries = this.countries;
			});
	}

	private loadCities(countryID?: number): void {
		if (!countryID) {
			this.countriesService
				.getCities()
				.subscribe(res => {
					if (!res.success) {
						//alert(res.message);
						return;
					}

					this.cities = res.data;
					this.viewCities = this.cities;
				});
			
			return;
		}

		this.countriesService
			.getCountryCities(countryID)
			.subscribe(res => {
				if (!res.success) {
					//alert(res.message);
					return;
				}

				this.cities = res.data;
				this.viewCities = this.cities;
			});
	}

	private initProfileForm(): void {
		this.profileForm = new FormGroup({
			fullName: new FormControl(null, [Validators.required]),
			email: new FormControl(null, [Validators.required, Validators.email]),
			phoneNumber: new FormControl(null, [Validators.required]),
			country: new FormControl(null, [Validators.required]),
			countryID: new FormControl(null, [Validators.required]),
			city: new FormControl(null, [Validators.required]),
			cityID: new FormControl(null, [Validators.required]),
			address: new FormControl(null, [Validators.required])
		});

		this.profileForm
			.controls['country']
			.valueChanges
			.debounceTime(500)
			.subscribe(value => {
				this.showCountriesDropdown = true;

				if (!value) {
					this.viewCountries = this.countries;
					return;
				}

				this.viewCountries = this.countries
					.filter(x => x.name.toLowerCase().includes(`${value}`.toLowerCase()));
			});

		this.profileForm
			.controls['city']
			.valueChanges
			.debounceTime(500)
			.subscribe(value => {
				this.showCitiesDropdown = true;

				if (!value) {
					this.viewCities = this.cities;
					return;
				}

				this.viewCities = this.cities
					.filter(x => x.name.toLowerCase().includes(`${value}`.toLowerCase()));
			});
	}

	private passPersonToForm(): void {
		this.profileForm
			.setValue({
				fullName: this.person.fullName,
				email: this.person.email,
				phoneNumber: this.person.phoneNumber,
				country: this.person.city.country ? this.person.city.country.name : null,
				countryID: this.person.city.country ? this.person.city.country.id : null,
				city: this.person.city ? this.person.city.name : null,
				cityID: this.person.city ? this.person.city.id : null,
				
				address: this.person.address
			}, { emitEvent: false });
			
	}

	constructor(
		private authService: AuthService,
		private personsService: PersonsService,
		private countriesService: CountriesService,
		private router: Router,
		private themeService: ThemeService
	) { 
		super();
		
		this.themeService
			.currentState
			.subscribe(theme => {
				this.theme = theme;
				if(this.theme === 0){
					this.calendarTheme = './light.scss';
				}
			});
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

		this.initProfileForm();
		this.loadCountries();
		this.loadCities();
		this.loadPerson();

		if(document.documentElement.clientWidth < 800){
			this.windowWidth = true;
		} 

		
	}

	public setCountry(country: Country): void {
		this.profileForm
			.controls['country']
			.setValue(country.name, { emitEvent: false });

		this.profileForm
			.controls['countryID']
			.setValue(country.id, { emitEvent: false });
			
		this.loadCities(country.id);
		this.showCountriesDropdown = false;

	}

	public setCity(city: City): void {
		this.profileForm
			.controls['city']
			.setValue(city.name, { emitEvent: false });

		this.profileForm
			.controls['cityID']
			.setValue(city.id, { emitEvent: false });

		this.showCitiesDropdown = false;
	}
	

	public addEvent(event: MatDatepickerInputEvent<Date>) {
		this.dateB = new Date(Date.UTC(event.value.getFullYear(), event.value.getMonth(), event.value.getDate()));
		
	}

	public submitProfile(form: FormGroup): void {
		
		if (form.invalid) {
			this.markContolsAsTouched() ;
			
			return;
		}
		
		if(!this.dateB){
			this.dateBError = true;
			setTimeout(() => {
				this.dateBError = false;
			}, 3000);
			return;
		}
		this.loader = true;
		const req = new UpdatePersonRequest();
		req.fullName = form.value['fullName'];
		req.birthDate = this.dateB;
		req.email = form.value['email'];
		req.phoneNumber = form.value['phoneNumber'];
		req.cityID = form.value['cityID'];
		req.address = form.value['address'];
		// console.log(req);
		this.personsService
			.updateMe(req)
			.subscribe(res => {
				if (!res.success) {
					// alert('error');
					//alert(res.message);
					this.updateResText = res.message;
					this.updateRes = true;
					this.successfullyChanged = false;
					setTimeout(() => {
						this.updateRes = false;
						this.updateResText = '';
					}, 3000);
					this.loader = false;
						return;
				}
				// console.log(res.data);
				this.person = res.data;
				this.dateB = new Date(res.data.birthDate);
				this.dateView = new Date(this.dateB).toISOString();
				this.updateRes = true;
				this.updateResText = res.message;
				this.successfullyChanged = true;
				setTimeout(() => {
					this.updateRes = false;
					this.successfullyChanged = false;
					this.updateResText = "";
					this.loader = false;
				}, 3000);
			});
	}

	public markContolsAsTouched() {
		this.profileForm.controls['fullName'].markAsTouched();
		this.profileForm.controls['email'].markAsTouched();
		this.profileForm.controls['phoneNumber'].markAsTouched();
		this.profileForm.controls['country'].markAsTouched();
		this.profileForm.controls['city'].markAsTouched();
		this.profileForm.controls['address'].markAsTouched();
	}

	public _keyUp(event: any) {
		const pattern = /[0-9\+\ ]/;
		let inputChar = String.fromCharCode(event.charCode);
		if (!pattern.test(inputChar)) {
		  event.preventDefault();
		}
	}

}
