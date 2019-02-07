import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/apiKey.service';
import { ApiKey } from '../../models/apiKey.model';
import { ApiKeyViewModel } from '../../models/apiKeyView.model';
import { CreateUpdateKeyRequest } from '../../models/create-update-keyRequest.model';

@Component({
  selector: 'app-api-keys',
  templateUrl: './api-keys.component.html',
  styleUrls: ['./api-keys.component.scss']
})
export class ApiKeysComponent implements OnInit {

  public isLoggedIn: boolean;

  public thisID:number =-2;
  public settings = -1;
  public apiKeys: ApiKey[];
  // public apiForm: FormGroup;
  // public forms: {};
  // public forms: { [key: string] : FormGroup; } = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService,
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

  public setValues(){
    
  
  }

  public settingsOpen(id : any){
    console.log(id + 4);
    let ID = id + 4;
    this.thisID = id;
    // if()
    // document.getElementById(ID).classList.add('settings-open');
  }

}
