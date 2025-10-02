import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-showroom-list',
  imports: [NgClass, RouterLink, PaginationComponent],
  templateUrl: './showroom-list.component.html',
  styleUrl: './showroom-list.component.css'
})
export class ShowroomListComponent {
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
  isSorted = false;

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
  sortBy(column: string) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }
    console.log(this.sortedColumn , this.sortDirection)
  }

  onAction(){
    console.log("test")
  }
  
}
