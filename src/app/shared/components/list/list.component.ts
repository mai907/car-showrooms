import { Component } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-list',
  imports: [PaginationComponent, ButtonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  filters = ["vin", "maker", "year", "yearmodel", "vin", "maker", "year", "yearmodel"]
  showroomList = [
    
      {
          "id": 1,
          "name": "showroom1",
          "commercialRegistrationNumber": 1234567890,
          "mangerName": "tester",
          "contactNumber": 599867099,
          "address": "address-home-2"
      },
      {
          "id": 3,
          "name": "showroom3",
          "commercialRegistrationNumber": 1234567877,
          "mangerName": "xy",
          "contactNumber": 599867093,
          "address": "address-home"
      }
  
  ]

  currentPage = 1;
  total = 50;
}
