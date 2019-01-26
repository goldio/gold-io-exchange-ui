import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { PersonsService } from '../../services/persons.service';
import { Person, Country, City } from 'src/app/common/models';
import { FormGroup, FormControl } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	public isLoggedIn: boolean;
	public person: Person;

	private countries: Country[];
	public viewCountries: Country[];

	private cities: City[];
	public viewCities: City[];

	public profileForm: FormGroup;

	public showCountriesDropdown: boolean = false;
	public showCitiesDropdown: boolean = false;

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

	private loadCountries(): void {
		this.countriesService
			.getCountries()
			.subscribe(res => {
				if (!res.success) {
					alert(res.message);
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
						alert(res.message);
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
					alert(res.message);
					return;
				}

				this.cities = res.data;
				this.viewCities = this.cities;
			});
	}

	private initProfileForm(): void {
		this.profileForm = new FormGroup({
			fullName: new FormControl(null),
			email: new FormControl(null),
			phoneNumber: new FormControl(null),
			country: new FormControl(null),
			countryID: new FormControl(null),
			city: new FormControl(null),
			cityID: new FormControl(null),
			address: new FormControl(null)
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
		this.loadCountries();
		this.loadCities();
		this.loadPerson();
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
}
