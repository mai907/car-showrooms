import { Component } from '@angular/core';
import { ListComponent } from '../../../shared/components/list/list.component';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { FiltersComponent } from '../../../shared/components/filters/filters.component';
import { CommonModule, NgClass } from '@angular/common';
import { FormComponent } from '../../../shared/components/form/form.component';

@Component({
  selector: 'app-car-list',
  imports: [PaginationComponent, RouterLink, FiltersComponent, CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  filters = [
    { key: 'vin', label: 'VIN' },
    { key: 'maker', label: 'Maker' },
    { key: 'year', label: 'Year' },
    { key: 'model', label: 'Model' },
    { key: 'modelYear', label: 'Model Year' },
    { key: 'amount', label: 'Amount' },
    { key: 'carShowroomName', label: 'Car Showroom Name' },
    { key: 'contactNumber', label: 'Contact Number' }
  ];  carList = [
    
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


  sortedColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
  pagedItems: string[] = [];
  pageSize = 5;

  ngOnInit() {
    this.updatePagedItems();
  }

  updatePagedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedItems = this.items.slice(start, start + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagedItems();
  }

  fetchFilteredData(filters: any) {
    console.log('Filters:', filters);
    // Example: { name: 'BMW', city: 'Riyadh', crn: '12345' }
    // this.backendService.getShowrooms(filters).subscribe(data => {
    //   this.showroomList = data;
    // });
  }
}
