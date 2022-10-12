import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../services/side-menu.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-entity-data',
  templateUrl: './entity-data.component.html',
  styleUrls: ['./entity-data.component.scss']
})
export class EntityDataComponent implements OnInit {
  user: string = '';
  constructor(private sideMenuService: SideMenuService,
    private router: Router) { }

  ngOnInit() {
    this.sideMenuService.cast.subscribe(user => this.user = user);
  }
  entityMaster() {
    this.router.navigate(["./entity-master"]);
  }
}
