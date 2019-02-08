import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/apiKey.service';
import { ApiKey } from '../../models/apiKey.model';
import { ApiKeyViewModel } from '../../models/apiKeyView.model';
import { CreateUpdateKeyRequest } from '../../models/create-update-keyRequest.model';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';

@Component({
  selector: 'app-api-keys',
  templateUrl: './api-keys.component.html',
  styleUrls: ['./api-keys.component.scss']
})
export class ApiKeysComponent extends BaseLayoutComponent implements OnInit {

  public isLoggedIn: boolean;

  public thisID:any = -2;
  public settings = -1;
  public apiKeys: ApiKey[];
  // public apiForm: FormGroup;
  // public forms: {};
  // public forms: { [key: string] : FormGroup; } = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService,
  ) { 
    super();
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
    
    this.getApiKey();
  }


  public copyToClipboard(str : string) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

  };



  public generateNewKey(){
    let CreateUpdateKeyRequest : CreateUpdateKeyRequest = {
      accountPermissions: false,
      ordersPermissions: false,
      fundsPermissions: false
    };
    this.apiService
    .generateNewKey(CreateUpdateKeyRequest)
      .subscribe(res => {
        if(!res.success){
          alert('error');
        }
        this.apiKeys = res.data;
        console.log( this.apiKeys );
      })
  }

  public deleteApiKey(id: number){
    this.apiService.deleteApiKey(id).subscribe(res =>{
      if(!res.success){

      }
      this.apiKeys = res.data;
    });
  }

  public getApiKey(){
    
    this.apiService
      .getApi()
        .subscribe(res => {
          if(!res.success){
            alert('error');
          }
          this.apiKeys = res.data;
          console.log( this.apiKeys );
        })
       
  }

  public changeAccountValues(id : any){
    this.apiKeys[id].accountPermissions = !this.apiKeys[id].accountPermissions;
    console.log(this.apiKeys[id].accountPermissions);
  }

  public changeOrdersValues(id : any){
    this.apiKeys[id].ordersPermissions = !this.apiKeys[id].ordersPermissions;
  }

  public changeFundsValues(id : any){
    this.apiKeys[id].fundsPermissions = !this.apiKeys[id].fundsPermissions;
  }

  public saveChanges(id : any){
    alert(id);
    let updateKey:CreateUpdateKeyRequest={
      accountPermissions: this.apiKeys[id].accountPermissions,
      ordersPermissions: this.apiKeys[id].ordersPermissions,
      fundsPermissions: this.apiKeys[id].fundsPermissions
    }
    this.apiService.updateApi(updateKey).subscribe(res => {
      if(!res.success){
        alert('error');
      }
      alert('ok');
      this.apiKeys = res.data;
      console.log(this.apiKeys);
    })
  }

  public settingsOpen(id : any){
    console.log(id);
    
    if(id != this.thisID && this.thisID!= -2){
      document.getElementById(this.thisID).classList.remove('settings-open');
    }
    this.thisID = id;
    if(document.getElementById(id).classList.contains('settings-open')){
      document.getElementById(id).classList.remove('settings-open');
      return;
    }

    document.getElementById(id).classList.add('settings-open');
    console.log(document.getElementById(''+ id));
  }

  public touch(id : any){
    
  }
}
