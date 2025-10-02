import { Component } from '@angular/core';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FiltersComponent } from '../../../shared/components/filters/filters.component';
import { CommonModule, NgClass } from '@angular/common';
import { CarService } from '../../../services/car.service';
import { ToastService } from '../../../services/toast.service';
import { Car } from '../../../shared/models/car';

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
  ];  
  carList:Car[]=[]

  currentPage = 1;
  total = 50;
  pageSize = 5;
  totalElements = 0;

    constructor(private carService:CarService) {}

  ngOnInit(){  
  this.fetchItems(this.currentPage, this.pageSize);
  }

    fetchItems(page: number, size: number, filters:any={}) {
    this.carService.getCars(page, size, filters).subscribe(response => {
    console.log("data::::::::::",response)
    this.carList = response.content;
    this.pageSize = response.size;
    this.totalElements = response.totalElements;
  });
}



  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchItems(page, this.pageSize);
  }

  fetchFilteredData(filters: any) {
    console.log('Filters:', filters);
      this.fetchItems(this.currentPage, this.pageSize, filters);

  }
}
