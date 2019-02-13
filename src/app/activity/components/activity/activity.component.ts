import { Component, OnInit } from '@angular/core';
import { BaseLayoutComponent } from 'src/app/common/components/base-layout.component';
import { UserSession } from '../../models/user-session.model';
import { WallenOperation } from '../../models/wallet-operation.model';
import { ActivityService } from './services/activity.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { ActivityType } from 'src/app/common/enums/activity-type.enum';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent extends BaseLayoutComponent implements OnInit {
  // public activity:boolean = true; 
  public isLoggedIn: boolean;
  public userSessions: UserSession[];

  public userViewSessions: UserSession[];
  // public wallenOperation: WallenOperation[];

  // public mass: string[] = 
  // ["Яблоко", "Апельсин", "Слива", "Яблоко", "Апельсин", "Слива", "Яблоко", "Апельсин", "Слива", "Слива",
  // "12", "Апельсин", "Слива", "Яблоко", "2", "Слива", "Яблоко", "Апельсин", "3", "Слива",
  // "Яблоко", "7", "Слива", "Яблоко", "Апельсин", "Слива", "Яблоко", "1", "Слива", "Слива",
  // "Яблоко", "9p8", "Слива", "4", "Апельсин", "12", "Яблоко", "Апельсин", "Слива", "Слива",
  // "Яблоко", "hjm", "Слива", "Яблоко", "Апельсин", "ew", "Яблоко", "dutk", "Слива", "Слива",
  //  "End" ];


  public pagesNumber:number;
  public pages:number[] = [];
  public currentPage:number = 1;
  public pageLenght:number;

  // public userViewmass: string[] = [];

  constructor(
    private activityService: ActivityService,
    private authService: AuthService,
    private router: Router,
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
    
    this.getSessions();
    
  }


  public getSessions(){
    this.activityService.getlogin().subscribe(res => {
      if(!res.success){
        alert('error');
      }
      this.userSessions = res.data;
      console.log(this.userSessions);
      this.calcMass();
    })
  }

  public calcMass(){
    this.pagesNumber = Math.floor(this.userSessions.length/10);

    if(this.userSessions.length % 10 > 0){
      this.pagesNumber ++ ;
    }
    var start = 1;
    while (start <= this.pagesNumber) {
      this.pages.push(start++);
    }
    console.log(this.pages);
    this.calcMassData();
  }

  public changePage(page: number){
    this.currentPage = page;
    this.calcMassData();
  }

  public prevPage(){
    if(this.currentPage - 1 > 0){
      this.currentPage = this.currentPage - 1;
    }else{
      this.currentPage = 1;
    }
    this.calcMassData();
  }

  public nextPage(){
    if(this.currentPage + 1 > this.pagesNumber){
      this.currentPage = this.pagesNumber;
    }else{
      this.currentPage = this.currentPage + 1;
    }
    this.calcMassData();
  }

  public calcMassData(){
    this.userViewSessions= [];
    console.log(this.userViewSessions);
    var pageNumb =(this.currentPage - 1)*10;
    var start=0;
    var nowPageLenght;
    if(this.userSessions.length <= 10){
      nowPageLenght = this.userSessions.length
    }
    if(this.currentPage*10 < this.userSessions.length){
      nowPageLenght = 10;
    }else{
      nowPageLenght = this.userSessions.length%10;
    }
    while (start < nowPageLenght) {
      this.userViewSessions[start] = this.userSessions[pageNumb];
      start++;
      pageNumb++;
    }
    console.log(this.userViewSessions);
  }

}
