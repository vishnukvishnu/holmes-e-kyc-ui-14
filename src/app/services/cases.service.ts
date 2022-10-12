import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  constructor(private http: HttpClient) { }

  public caseData(): Observable<any> {
    return this.http.get("./assets/json/case-details.json");
  }
}
