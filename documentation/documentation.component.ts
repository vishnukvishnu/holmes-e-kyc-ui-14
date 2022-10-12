import { Component, OnInit } from "@angular/core";
import { DocumentationService } from "../services/documentation.service";
import { Sort } from "@angular/material/sort";

@Component({
  selector: "app-documentation",
  templateUrl: "./documentation.component.html",
  styleUrls: ["./documentation.component.scss"]
})
export class DocumentationComponent implements OnInit {
  documentationData = [];
  sortedData: any[] = [];
  constructor(private documentationService: DocumentationService) {
    this.documentationService.documentationData().subscribe(data => {
      this.documentationData = data;
      this.sortedData = this.documentationData.slice();
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
        case "name":
          return compare(a.name, b.name, isAsc);
        case "source":
          return compare(a.source, b.source, isAsc);
        case "category":
          return compare(a.category, b.category, isAsc);
        case "type":
          return compare(a.type, b.type, isAsc);
        case "status":
          return compare(a.status, b.status, isAsc);
        case "connection":
          return compare(a.connection, b.connection, isAsc);
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
