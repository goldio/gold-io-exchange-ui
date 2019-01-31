import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { ActivationRequest  } from 'src/app/common/models/request/activation-request.model';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkKey();
  }
  private checkKey() {
    this.activatedRoute.queryParams
        .subscribe((params: Params) => {
            if (params['key']) {
                this.sendCheckKey({
                    key: params['key']
                });
            }
        });
}
private sendCheckKey(activationRequest: ActivationRequest) {
  this.authService.activation(activationRequest)
      .subscribe(res => {
        if(!res.success){
            this.router.navigate(['/authorization'], { queryParams: { activation: false } });
            return
        }
        this.router.navigate(['/authorization'], { queryParams: { activation: true } });
         
      });
}
}
