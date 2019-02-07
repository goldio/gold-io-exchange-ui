import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { Notifications } from '../../models/notifications.model';
import { FormGroup, FormControl } from '@angular/forms';
import { NotificationsUpdate } from '../../models/notifications-update.model';
import { BaseLayoutComponent } from 'src/app/common/components/base.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent extends BaseLayoutComponent implements OnInit {
  
  
  public notifications : Notifications;
  public notifForm: FormGroup;
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
        this.notifications = res;
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
      emailNews: Boolean(form.controls['news'].value),
      emailLogins: Boolean(form.controls['loging'].value),
      emailCoinsRemovals: Boolean(form.controls['coin'].value),
      emailMarketRemovals: Boolean(form.controls['market'].value)
    }
    console.log(notificationsUpdateForm);
    
    this.notificationsService
      .updateNotifications(notificationsUpdateForm)
      .subscribe(res =>{
        if(!res.success){

        }
        alert('ok');
      })
    
  }

}
