import { Component } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [PaginationComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  filters = ["vin", "maker", "year", "model", "modelYear", "amount", "carShowroomName", "contactNumber"]
  carList = [
    
    {
      "id": 2,
      "vin": "12332155",
      "maker": "Hondy",
      "model": "Creta",
      "modelYear": 2022,
      "amount": 200.0,
      "carShowroomName": "showroom1",
      "contactNumber": 599867099
  },
  {
      "id": 3,
      "vin": "12332155",
      "maker": "Hondy",
      "model": "Creta",
      "modelYear": 2022,
      "amount": 200.0,
      "carShowroomName": "showroom3",
      "contactNumber": 599867093
  }
  
  ]

  currentPage = 1;
  total = 50;
}
