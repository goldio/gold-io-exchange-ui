import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { HighchartsChartModule } from 'highcharts-angular';

import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './auth/components/authorization/authorization.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { BalanceComponent } from './balance/components/balance/balance.component';
import { NotificationsComponent } from './notifications/components/notifications/notifications.component';
import { IndexComponent } from './index/components/index/index.component';
import { ApiKeysComponent } from './api-keys/components/api-keys/api-keys.component';
import { SecurityComponent } from './security/components/security/security.component';
import { ActivityComponent } from './activity/components/activity/activity.component';
import { WebsocketService } from './common/services/websocket.service';
import { BinanceService } from './common/services/binance.service';
import { AuthService } from './common/services/auth.service';
import { UsersService } from './common/services/users.service';
import { PersonsService } from './profile/services/persons.service';
import { ThemeService } from './common/services/theme.service';
import { WalletsService } from './common/services/wallets.service';
import { CountriesService } from './profile/services/countries.service';
import { TradeService } from './common/services/trade.service';
import { SucessfullComponent } from './auth/components/sucessfull/sucessfull.component';
import { RecoveryComponent } from './auth/components/recovery/recovery.component';
import { ActivationComponent } from './auth/components/activation/activation.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { NotificationsService } from './notifications/services/notifications.service';
import { ApiService } from './api-keys/services/apiKey.service';
import { SecurityService } from './security/services/security.service';
import { ActivityService } from './activity/components/activity/services/activity.service';
import { BalanceDepositComponent } from './balance/components/balance-deposit/balance-deposit.component';
import { BalanceWithdrawalComponent } from './balance/components/balance-withdrawal/balance-withdrawal.component';
import { StorageService } from './common/services/storage.service';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { BalanceService } from './balance/services/balance.service';
import { BalaceHistoryComponent } from './balance/components/balace-history/balace-history.component';
import { SucessfullSentEmailPasswordComponent } from './auth/components/sucessfull-sent-email-password/sucessfull-sent-email-password.component';
import { TvChartContainerComponent } from './tv-chart-container/tv-chart-container.component';
import { MainComponent } from './main/main.component';
import { EventsComponent } from './events/events.component';
import { EventsService } from './events/model/events.service';
import { CompetitionsComponent } from './competitions/competitions.component';
import { BotsComponent } from './bots/bots.component';
import { TradersComponent } from './traders/traders.component';
import { CompetitionComponent } from './competitions/competition/competition.component';
import { BotComponent } from './bots/bot/bot.component';
import { TraderComponent } from './traders/trader/trader.component';




@NgModule({
	declarations: [
		AppComponent,
		AuthorizationComponent,
		RegistrationComponent,
		BalanceComponent,
		NotificationsComponent,
		HeaderComponent,
		IndexComponent,
		ApiKeysComponent,
		ProfileComponent,
		SecurityComponent,
		ActivityComponent,
		SucessfullComponent,
		RecoveryComponent,
		ActivationComponent,
		ChangePasswordComponent,
		BalanceDepositComponent,
		BalanceWithdrawalComponent,
		BalaceHistoryComponent,
		SucessfullSentEmailPasswordComponent,
		TvChartContainerComponent,
		MainComponent,
		EventsComponent,
		CompetitionsComponent,
		BotsComponent,
		TradersComponent,
		CompetitionComponent,
		BotComponent,
		TraderComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		HighchartsChartModule,
		[BrowserAnimationsModule],
		MatDatepickerModule,
		MatNativeDateModule,
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		MatDatepickerModule,
		MatFormFieldModule,
		NgxQRCodeModule,
    	MatInputModule,
		[MatButtonModule, MatCheckboxModule],
		MalihuScrollbarModule.forRoot(),
		RouterModule.forRoot(
			[
				{ path: '', redirectTo: 'main', pathMatch: 'full' },
				{
					path: 'authorization', component: AuthorizationComponent,
					data: {
						noHeader: true,
						noSidebar: true
					}
				},
				{
					path: 'registration', component: RegistrationComponent,
					data: {
						noHeader: true,
						noSidebar: true
					}
				},
				{ path: 'balance', component: BalanceComponent },
				{ path: 'profile', component: ProfileComponent },
				{ path: 'activity', component: ActivityComponent },
				{ path: 'notification', component: NotificationsComponent },
				{ path: 'apiKeys', component: ApiKeysComponent },
				{ path: 'security', component: SecurityComponent },
				{ path: 'index', component: IndexComponent },
				{ path: 'main', component: MainComponent },
				{ path: 'activation', component: ActivationComponent },
				{ path: 'balanceDeposit', component: BalanceDepositComponent },
				{ path: 'balanceWithdrawal', component: BalanceWithdrawalComponent },
				{ path: 'balanceHistory', component: BalaceHistoryComponent },
				{ path: 'EmailPass', component: SucessfullSentEmailPasswordComponent ,
					data: {
						noHeader: true,
						noSidebar: true
					}
				},
				{
					path: 'sucessfull', component: SucessfullComponent,
					data: {
						noHeader: true,
						noSidebar: true
					}
				},
				{
					path: 'changePassword', component: ChangePasswordComponent,
					data: {
						noHeader: true,
						noSidebar: true
					}
				},
				{
					path: 'recovery', component: RecoveryComponent,
					data: {
						noHeader: true,
						noSidebar: true
					}
				}
			]
		),
	],
	providers: [
		ThemeService,
		AuthService,
		UsersService,
		PersonsService,
		WalletsService,
		CountriesService,
		WebsocketService,
		BinanceService,
		TradeService,
		NotificationsService,
		ApiService,
		SecurityService,
		ActivityService,
		StorageService,
		BalanceService,
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		EventsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
