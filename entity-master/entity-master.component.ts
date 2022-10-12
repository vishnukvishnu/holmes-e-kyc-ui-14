import {
  Component,
  Input,
  Output,
  EventEmitter,
  Inject,
  OnChanges,
  ChangeDetectorRef
} from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { Sort } from "@angular/material/sort";
import { PopupService } from "../services/popup-service.service";
import { SideMenuService } from "../services/side-menu.service";
import { EntityMasterService } from "../services/entity-master.service";
import { DOCUMENT } from "@angular/common";
import { AdvancedSearchComponent } from "../advanced-search/advanced-search.component";

@Component({
  selector: "app-entity-master",
  templateUrl: "./entity-master.component.html",
  styleUrls: ["./entity-master.component.scss"]
})
export class EntityMasterComponent implements OnChanges {
  @Input() groupFilters: Object | undefined;
  @Input() searchByKeyword: string | undefined;
  @Output() groupFilter: EventEmitter<any> = new EventEmitter<any>();
  users: any[] = [];
  filteredUsers: any[] = [];
  user: string = '';
  toggle: boolean = false;
  popup: any;
  GetSearchdata: any;
  caseDetail: any;
  casesortedData: any[] = [];
  clearHide: boolean = false;
  accordian: boolean = false;
  public searchText: any;
  public customerData: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private ref: ChangeDetectorRef,
    private popupService: PopupService,
    private sideMenuService: SideMenuService,
    private entityMasterService: EntityMasterService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.popupService.castOne.subscribe(
      GetSearchdata => (this.GetSearchdata = GetSearchdata)
    );
    // Getting data from AdvancedSearchComponent
  }
  ngOnInit(): void {
    this.loadUsers();
    this.sideMenuService.cast.subscribe(user => (this.user = user));

    this.entityMasterService.caseDetails().subscribe(data => {
      this.caseDetail = data;
      this.casesortedData = this.caseDetail.slice();
    });
  }
  ngOnChanges(): void {
    if (this.groupFilters) this.filterUserList(this.groupFilters, this.users);
  }
  popupOpen() {
    this.toggle = true;
    this.popupService.popUp(this.toggle);
  }
  // accordianToggle(i) {
  //   this.accordian = !this.accordian;
  //   if (this.accordian == true) {
  //     this.document
  //       .getElementById("accordianPlus" + i)
  //       .classList.add("inActive");
  //     this.document
  //       .getElementById("accordianMinus" + i)
  //       .classList.remove("inActive");
  //   }
  //   if (this.accordian == false) {
  //     this.document
  //       .getElementById("accordianPlus" + i)
  //       .classList.remove("inActive");
  //     this.document
  //       .getElementById("accordianMinus" + i)
  //       .classList.add("inActive");
  //   }
  // }
  clearAll() {
    this.clearHide = true;
    this.GetSearchdata.clientid = "";
    this.GetSearchdata.location = "";
    this.GetSearchdata.clientname = "";
    this.GetSearchdata.createid = "";
    Object.keys(this.GetSearchdata).forEach(key =>
      this.GetSearchdata[key] === "" ? delete this.GetSearchdata[key] : key
    );

    this.filterUserList(this.GetSearchdata, this.users);
    this.GetSearchdata = null;
  }
  clearClientid() {
    this.GetSearchdata.clientid = "";
  }
  location() {
    this.GetSearchdata.location = "";
  }
  clientname() {
    this.GetSearchdata.clientname = "";
  }
  createid() {
    this.GetSearchdata.createid = "";
  }
  filterUserList(filters: any, users: any): void {
    this.filteredUsers = this.users; //Reset User List
    const keys = Object.keys(filters);
    const filterUser = (user: { [x: string]: string | number; }) => {
      let result = keys.map(key => {
        if (!~key.indexOf("age")) {
          if (user[key]) {
            return String(user[key])
              .toLowerCase()
              .startsWith(String(filters[key]).toLowerCase());
          } else {
            return false;
          }
        }
      });
      // To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
      result = result.filter(it => it !== undefined);
      // Filter the Age out from the other filters
      if (filters["ageto"] && filters["agefrom"]) {
        if (user["age"]) {
          if (
            +user["age"] >= +filters["agefrom"] &&
            +user["age"] <= +filters["ageto"]
          ) {
            result.push(true);
          } else {
            result.push(false);
          }
        } else {
          result.push(false);
        }
      }
      return result.reduce((acc, cur: any) => {
        return acc & cur;
      }, 1);
    };
    this.filteredUsers = this.users.filter(filterUser);
  }

  loadUsers(): void {
    this.userService.fetchUsers().subscribe(users => (this.users = users));
    this.filteredUsers =
      this.filteredUsers.length > 0 ? this.filteredUsers : this.users;
  }

  entityData() {
    this.router.navigate(["./entity-data"]);
  }

  // sorting

  sortData(sort: Sort) {
    const data = this.filteredUsers.slice();
    if (!sort.active || sort.direction === "") {
      this.filteredUsers = data;
      return;
    }

    this.filteredUsers = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "clientid":
          return compare(a.clientid, b.clientid, isAsc);
        case "clientname":
          return compare(a.clientname, b.clientname, isAsc);
        case "clienttype":
          return compare(a.clienttype, b.clienttype, isAsc);
        case "location":
          return compare(a.location, b.location, isAsc);
        case "event":
          return compare(a.event, b.event, isAsc);
        case "createid":
          return compare(a.createid, b.createid, isAsc);
        default:
          return 0;
      }
    });
  }
  casesortData(sort: Sort) {
    const data = this.casesortedData.slice();
    if (!sort.active || sort.direction === "") {
      this.casesortedData = data;
      return;
    }

    this.casesortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "caseId":
          return compare(a.caseId, b.caseId, isAsc);
        case "caseType":
          return compare(a.caseType, b.caseType, isAsc);
        case "caseStatus":
          return compare(a.caseStatus, b.caseStatus, isAsc);
        case "unit":
          return compare(a.unit, b.unit, isAsc);
        case "updata":
          return compare(a.updata, b.updata, isAsc);
        case "updateDate":
          return compare(a.updateDate, b.updateDate, isAsc);
        case "create":
          return compare(a.create, b.create, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
