import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClientDetailsService {
  constructor(private http: HttpClient) {}

  public clientDetails(): Observable<any> {
    return this.http.get("./assets/json/client-details.json");
  }
}
