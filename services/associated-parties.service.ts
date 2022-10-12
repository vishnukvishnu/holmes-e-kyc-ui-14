import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AssociatedPartiesService {
  constructor(private http: HttpClient) {}

  public associatedParties(): Observable<any> {
    return this.http.get("./assets/json/associated-parties.json");
  }
}
