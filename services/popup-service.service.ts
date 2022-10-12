import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PopupService {
    private popup = new BehaviorSubject('');
    cast = this.popup.asObservable();

    private searchData = new BehaviorSubject('');
    castOne = this.searchData.asObservable();

    constructor() { }

    popUp(popupToggle) {
        this.popup.next(popupToggle);
    }

    GetSearchdata(searchUser){
        this.searchData.next(searchUser);
    }
}
