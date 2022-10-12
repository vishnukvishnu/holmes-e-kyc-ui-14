import { Component, OnInit } from "@angular/core";
import { CasesService } from "../services/cases.service";
import { Sort } from "@angular/material/sort";

@Component({
  selector: "app-cases",
  templateUrl: "./cases.component.html",
  styleUrls: ["./cases.component.scss"]
})
export class CasesComponent implements OnInit {
  casesData: any[] = [];
  sortedData: any[] = [];
  constructor(private casesService: CasesService) {
    this.casesService.caseData().subscribe(data => {
      this.casesData = data;
      this.sortedData = this.casesData.slice();
    });
  }

  ngOnInit() {}

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "caseName":
          return compare(a.caseName, b.caseName, isAsc);
        case "required":
          return compare(a.required, b.required, isAsc);
        case "activity":
          return compare(a.activity, b.activity, isAsc);
        case "taskName":
          return compare(a.taskName, b.taskName, isAsc);
        case "team":
          return compare(a.team, b.team, isAsc);
        case "date":
          return compare(a.date, b.date, isAsc);
        case "taskDuration":
          return compare(a.taskDuration, b.taskDuration, isAsc);
        case "status":
          return compare(a.status, b.status, isAsc);
        case "requestor":
          return compare(a.requestor, b.requestor, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
