import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SideMenuService } from './services/side-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // manageLink: boolean;
  // dslLink: boolean;
  currentRout: any;
  isTrue: boolean = false;
  // user: string;

  constructor(private router: Router,
    private sideMenuService: SideMenuService,
    private route: ActivatedRoute) { }
   
  ngOnInit() {
    this.currentRout = this.router.url;
   // this.sideMenuService.cast.subscribe(user => this.user = user);
  }
  openNav() {
    this.isTrue = !this.isTrue;
    this.sideMenuService.editUser(this.isTrue);
  }

}
