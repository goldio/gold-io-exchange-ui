import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/common/enums/theme.enum';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	public isLoggedIn: boolean;

	public menu: boolean = false;
	public userOpen: boolean = false;

	constructor(
		private authService: AuthService,
		private router: Router,
		// private themeService: StateService<Theme>
	) { }

	ngOnInit() {
		this.authService
			.isLoggedIn
			.subscribe(logged => {
				this.isLoggedIn = logged;
			});
	}

	public theme() {
		// this.themeService.setTheme();
	}

}
