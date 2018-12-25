import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public noHeader = false;
  public noSidebar = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){
    this.router.events
    .subscribe(() => {
      this.noHeader = this.hasNoHeaderFlag(this.route.snapshot);
      this.noSidebar = this.hasNoSidebarFlag(this.route.snapshot);
    })
  }
  private hasNoHeaderFlag (route: ActivatedRouteSnapshot) {
    if (route.data && route.data.noHeader) {
      return true;
    }
    
    if (route.firstChild) {
      return this.hasNoHeaderFlag(route.firstChild);
    }

    return false;
  }

  private hasNoSidebarFlag(route: ActivatedRouteSnapshot): boolean {
    if (route.data && route.data.noSidebar) {
        return true;
    }

    if (route.firstChild) {
      return this.hasNoHeaderFlag(route.firstChild);
    }

    return false;
  }
}
