import { Component, OnInit } from '@angular/core';
import { ClientDetailsService} from '../services/client-details.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  clientDetails = [];
  constructor(private ClientDetailsService: ClientDetailsService) { }
  ngOnInit() {
    this.ClientDetailsService.clientDetails().subscribe(data => {
      this.clientDetails = data;
    });
  }

}
