import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './auth/components/authorization/authorization.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { BalanceComponent } from './balance/components/balance/balance.component';
import { NotificationsComponent } from './notifications/components/notifications/notifications.component';
import { IndexComponent } from './index/components/index/index.component';
import { ApiKeysComponent } from './api-keys/components/api-keys/api-keys.component';
import { ProfileComponent } from './profile/notifications/profile/profile.component';
import { SecurityComponent } from './security/components/security/security.component';
import { ActivityComponent } from './activity/components/activity/activity.component';

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'index', pathMatch: 'full'},
        { path: 'authorization', component: AuthorizationComponent , 
          data : { 
            noHeader: true, 
            noSidebar: true 
          }
        },
        { path: 'registration', component: RegistrationComponent , 
          data : { 
            noHeader: true, 
            noSidebar: true 
          }
        },
        { path: 'balance', component: BalanceComponent},
        { path: 'profile', component: ProfileComponent},
        { path: 'activity', component: ActivityComponent},
        { path: 'notification', component: NotificationsComponent},
        { path: 'apiKeys', component: ApiKeysComponent},
        { path: 'security', component: SecurityComponent},
        { path: 'index', component: IndexComponent},
      ]
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
