import { Component, OnInit } from "@angular/core";
import { AssociatedPartiesService } from "../services/associated-parties.service";
import { Sort } from "@angular/material/sort";

@Component({
  selector: "app-associated-parties",
  templateUrl: "./associated-parties.component.html",
  styleUrls: ["./associated-parties.component.scss"]
})
export class AssociatedPartiesComponent implements OnInit {
  associatedParties = [];
  sortedData: any[] = [];
  constructor(private associatedPartiesService: AssociatedPartiesService) {
    this.associatedPartiesService.associatedParties().subscribe(data => {
      this.associatedParties = data;
      this.sortedData = this.associatedParties.slice();
    });
  }

  ngOnInit() {}

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    console.log(data);
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "id":
          return compare(a.id, b.id, isAsc);
        case "entityName":
          return compare(a.entityName, b.entityName, isAsc);
        case "relationship":
          return compare(a.relationship, b.relationship, isAsc);
        case "relatedto":
          return compare(a.relatedto, b.relatedto, isAsc);
        case "ownership":
          return compare(a.ownership, b.ownership, isAsc);
        case "updatedby":
          return compare(a.updatedby, b.updatedby, isAsc);
        case "updatedDate":
          return compare(a.updatedDate, b.updatedDate, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
