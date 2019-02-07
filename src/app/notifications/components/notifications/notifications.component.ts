import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { Notifications } from '../../models/notifications.model';
import { FormGroup, FormControl } from '@angular/forms';
import { NotificationsUpdate } from '../../models/notifications-update.model';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent extends BaseLayoutComponent implements OnInit {
  
  
  public notifications : Notifications;
  public notifForm: FormGroup;

  public updateRes = false;
  public updateResText:string;

  constructor(
    private notificationsService: NotificationsService
  ) {
    super();
  }

  ngOnInit() {
  
    this.getNot();
    this.initnotifications();
    
  }

  private getNot(){
    this.notificationsService
      .getNotifications()
      .subscribe(res => {
        if(!res.success){
          alert('err');
        }
        this.notifications = res.data;
        
      });
      
  }
  private initnotifications(): void {
		this.notifForm = new FormGroup({
			news: new FormControl(),
			loging: new FormControl(),
			coin: new FormControl(),
			market: new FormControl()
		});
	}
  private submitNotif(form:FormGroup){
    let notificationsUpdateForm :NotificationsUpdate = {
      emailNews: this.notifications.emailNews,
      emailLogins: this.notifications.emailLogins,
      emailCoinsRemovals: this.notifications.emailCoinsRemovals,
      emailMarketRemovals: this.notifications.emailMarketRemovals
    }
    
    
    this.notificationsService
      .updateNotifications(notificationsUpdateForm)
      .subscribe(res =>{
        if(!res.success){
          this.updateResText = res.message;
          this.updateRes = true;
				this.updateResText = "Data successfully changed."
				setTimeout(() => {
					this.updateRes = false;
				}, 3000);
        }
          this.updateResText = 'Data successfully changed.';
          this.updateRes = true;
				this.updateResText = "Data successfully changed."
				setTimeout(() => {
					this.updateRes = false;
				}, 3000);
      })
    
  }

  public change(str: string){
    if(str == "emailNews"){
      this.notifications.emailNews = !this.notifications.emailNews;
    }
    if(str == "emailLogins"){
      this.notifications.emailLogins = !this.notifications.emailLogins;
    }
    if(str == "emailCoinsRemovals"){
      this.notifications.emailCoinsRemovals = !this.notifications.emailCoinsRemovals;
    }
    if(str == "emailMarketRemovals"){
      this.notifications.emailMarketRemovals = !this.notifications.emailMarketRemovals;
    }
  }

}
