import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/apiKey.service';
import { ApiKey } from '../../models/apiKey.model';
import { CreateUpdateKeyRequest } from '../../models/create-update-keyRequest.model';
import { BaseLayoutComponent } from '../../../common/components/base-layout.component';
import { AuthService } from '../../../common/services/auth.service';
import { ApiKeyRole } from '../../../common/enums';

@Component({
  selector: 'app-api-keys',
  templateUrl: './api-keys.component.html',
  styleUrls: ['./api-keys.component.scss']
})
export class ApiKeysComponent extends BaseLayoutComponent implements OnInit {
  public loader = false;
  public isLoggedIn: boolean;

  public thisID:any = -2;
  public settings = -1;
  public apiKeys: ApiKey[];

  public updateRes:boolean=false;
  public updateResText:string;
  public successfullyChanged=false;
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
    let request: CreateUpdateKeyRequest = {
      role: ApiKeyRole.NoActions
    };

    this.loader = true;
    this.apiService
    .generateNewKey(request)
      .subscribe(res => {
        if(!res.success){
          this.updateResText = res.message;
					this.updateRes = true;
					setTimeout(() => {
            this.updateRes = false;
            this.updateResText ="";
            this.loader = false;
					}, 3000);
						return;
        }
        this.apiKeys = res.data;
        this.updateRes = true;
        this.successfullyChanged =true;
				this.updateResText = res.message;
				setTimeout(() => {
          this.updateRes = false;
          this.successfullyChanged = false;
          this.updateResText = "";
          this.loader = false;
				}, 3000);
      })
  }

  public deleteApiKey(id: number){
    this.loader = true;
    this.apiService.deleteApiKey(id).subscribe(res =>{
      if(!res.success){
        this.updateResText = res.message;
        this.updateRes = true;
       
        setTimeout(() => {
          this.updateRes = false;
          this.updateResText ="";
          this.loader = false;
        }, 3000);
          return;
      }
      this.apiKeys = res.data;
      this.updateRes = true;
      this.successfullyChanged =true;
				this.updateResText = "Data successfully changed."
				setTimeout(() => {
          this.updateRes = false;
          this.successfullyChanged = false;
          this.updateResText = "";
          this.loader = false;
				}, 3000);
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
        })
       
  }

  getApiKeyRoleActive(type: string, role: ApiKeyRole): boolean {
    console.log(type, role);
    if (type == 'account') {
      if (role == ApiKeyRole.OnlyAccount || role == ApiKeyRole.AllActions) {
        return true;
      } else {
        return false;
      }
    } else if (type == 'orders') {
      if (role == ApiKeyRole.OnlyOrders || role == ApiKeyRole.AllActions) {
        return true;
      } else {
        return false;
      }
    }
  }

  public changeAccountValues(id : any){
    let key = this.apiKeys.find(x=>x.id == id);

    switch (key.role) {
      case ApiKeyRole.NoActions:
        key.role = ApiKeyRole.OnlyAccount;
        break;
      case ApiKeyRole.OnlyAccount:
        key.role = ApiKeyRole.NoActions;
        break;
      case ApiKeyRole.OnlyOrders:
        key.role = ApiKeyRole.AllActions;
        break;
      case ApiKeyRole.AllActions:
        key.role = ApiKeyRole.OnlyOrders;
        break;
    }
  }

  public changeOrdersValues(id : any){
    let key = this.apiKeys.find(x=>x.id == id);

    switch (key.role) {
      case ApiKeyRole.NoActions:
        key.role = ApiKeyRole.OnlyOrders;
        break;
      case ApiKeyRole.OnlyAccount:
        key.role = ApiKeyRole.AllActions;
        break;
      case ApiKeyRole.OnlyOrders:
        key.role = ApiKeyRole.NoActions;
        break;
      case ApiKeyRole.AllActions:
        key.role = ApiKeyRole.OnlyAccount;
        break;
    }
  }

  public saveChanges(id : any){
    // alert(id);
    let updateKey:CreateUpdateKeyRequest={
      role: this.apiKeys.find(x => x.id == id).role
    };
    this.loader = true;
    // console.log(updateKey);
    this.apiService.updateApi(updateKey,id).subscribe(res => {
      if(!res.success){
        this.updateResText = res.message;
          this.updateRes = true;
					setTimeout(() => {
            this.updateRes = false;
            this.updateResText ="";
            this.loader = false;
					}, 3000);
						return;
      }
      // alert('ok');
      this.apiKeys = res.data;
      this.updateRes = true;
      this.successfullyChanged =true;
				this.updateResText = res.message;
				setTimeout(() => {
          this.updateRes = false;
          this.successfullyChanged = false;
          this.updateResText = "";
          this.loader = false;
				}, 3000);
    })
  }

  public settingsOpen(id : any){
    // console.log(id);
    
    if(id != this.thisID && this.thisID!= -2){
      document.getElementById(this.thisID).classList.remove('settings-open');
    }
    this.thisID = id;
    if(document.getElementById(id).classList.contains('settings-open')){
      document.getElementById(id).classList.remove('settings-open');
      return;
    }

    document.getElementById(id).classList.add('settings-open');
    // console.log(document.getElementById(''+ id));
  }


}
