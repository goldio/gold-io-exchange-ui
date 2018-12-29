import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/common/enums/theme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menu = false;
  public userOpen = false;
  constructor(
    private router: Router,
    // private themeService: StateService<Theme>
  ) { }

  ngOnInit() {

  }

  public theme(){
    // this.themeService.setTheme();
  }

}
