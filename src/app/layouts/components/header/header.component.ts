import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../common/models';
import { AuthService } from '../../../common/services/auth.service';
import { UsersService } from '../../../common/services/users.service';
import { ThemeService } from '../../../common/services/theme.service';
import { NgForm } from '@angular/forms';

declare var jquery: any;
declare var $: any;

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	public isLoggedIn: boolean;
	public user: User;

	public menu = false;
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
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $("#header"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { 
				if(document.getElementById('popup') && document.getElementById('popup').classList.contains('left-top-menu-open')){
					document.getElementById('popup').classList.remove('left-top-menu-open');
				}
			}
		});
		
	}

	public theme() {
		this.themeService.setState();
	}

	public logout() {
		this.authService.logout();
	}

	public menuOpen(){
		if(document.getElementById('popup').classList.contains('left-top-menu-open')){
			document.getElementById('popup').classList.remove('left-top-menu-open');
			document.getElementById('header').classList.remove('zi999');

			return;
		}
		if(!document.getElementById('popup').classList.contains('left-top-menu-open')){
			document.getElementById('popup').classList.add('left-top-menu-open');
			document.getElementById('header').classList.add('zi999');
		}
	}
	public changeMenu(){
		this.menu = false;
	}

	public lang:string = "/assets/images/en.svg";
	public selectFlag(option:string) {
		if (option == 'en') {
			this.lang = "/src/assets/images/en.svg";
		}
		else if(option == 'ru') {
			this.lang = "/src/assets/images/en.svg";
		}
		else {
			this.lang = "/src/assets/images/en.svg";
		}
	}
		
}
