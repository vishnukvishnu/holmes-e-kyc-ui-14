import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DocumentationService {
  constructor(private http: HttpClient) {}

  public documentationData(): Observable<any> {
    return this.http.get("./assets/json/documentation.json");
  }
}
