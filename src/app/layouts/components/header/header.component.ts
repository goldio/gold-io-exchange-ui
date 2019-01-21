import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/common/enums/theme.enum';
import { AuthService } from 'src/app/common/services/auth.service';
import { UsersService } from 'src/app/common/services/users.service';
import { User } from 'src/app/common/models';
import { ThemeService } from 'src/app/common/services/theme.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	public isLoggedIn: boolean;
	public user: User;

	public menu: boolean = false;
	public userOpen: boolean = false;

	private loadUser(): void {
		if (!this.isLoggedIn) {
			return;
		}

		this.usersService
			.getMe()
			.subscribe(res => {
				if (!res.success) {
					return false;
				}

				this.user = res.data;
			});
	}

	constructor(
		private authService: AuthService,
		private usersService: UsersService,
		private router: Router,
		private themeService: ThemeService
	) { }

	ngOnInit() {
		this.authService
			.isLoggedIn
			.subscribe(logged => {
				this.isLoggedIn = logged;
			});

		this.loadUser();
	}

	public theme() {
		this.themeService.setState();
	}

	public logout() {
		this.authService.logout();
	}
}
