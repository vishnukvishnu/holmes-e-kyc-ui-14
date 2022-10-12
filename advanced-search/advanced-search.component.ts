import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { PopupService } from "../services/popup-service.service";
// import { filter } from "minimatch";

@Component({
  selector: "app-search",
  templateUrl: "./advanced-search.component.html",
  styleUrls: ["./advanced-search.component.scss"]
})
export class AdvancedSearchComponent implements OnInit {
  form: FormGroup | undefined;
  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  searchText: string = "";
  close: boolean = true;
  btnValid: boolean = false;
  popup: any;

  constructor(private fb: FormBuilder, private popupService: PopupService) {}
  ngOnInit(): void {
    this.popupService.cast.subscribe(popup => (this.popup = popup));
    this.popup = false;
    this.buildForm();
  }
  // ngOnChanges(): void {
  //   console.log("dfasdfasdfasdf");
  //   if (this.uerForm.value.clientid == "" || this.uerForm.value.location == "" || this.uerForm.value.clientname == "" || this.uerForm.value.createid == "") {
  //     this.btnValid == true;
  //   }
  // }
  // passing value to filter

  buildForm(): void {
    this.form = this.fb.group({
      clientid: new FormControl(""),
      location: new FormControl(""),
      clientname: new FormControl(""),
      createid: new FormControl("")
    });
  }

  // uerForm = new FormGroup({
  //   clientid: new FormControl(""),
  //   location: new FormControl(""),
  //   clientname: new FormControl(""),
  //   createid: new FormControl("")
  // })

  search(filters: any): void {
    Object.keys(filters).forEach(key =>
      filters[key] === "" ? delete filters[key] : key
    );
    this.groupFilters.emit(filters);
    this.popup = false;
    this.popupService.GetSearchdata(filters);
  }

  overlayHide() {
    this.popup = false;
  }
}
