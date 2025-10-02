import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { ShowroomService } from '../../../services/showroom.service';
import { Showroom } from '../../../shared/models/showroom';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-showroom-list',
  imports: [NgClass, RouterLink, PaginationComponent],
  templateUrl: './showroom-list.component.html',
  styleUrl: './showroom-list.component.css'
})
export class ShowroomListComponent {
  filters = ["vin", "maker", "year", "yearmodel", "vin", "maker", "year", "yearmodel"]
  showroomList:Showroom[] = []
  showroomId = ''

  currentPage = 1;
  totalElements = 0;
  totalPages=1;
  isSorted = false;

  sortedColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  pageSize = 5;

  showDeleteModal = false;

  constructor(private showroomService:ShowroomService,
        private toastService: ToastService,
        private route: ActivatedRoute
  ) {}

  ngOnInit(){  
  this.fetchItems(this.currentPage, this.pageSize);
  }

openDeleteModal(id: number) {
  console.log("sdfghjkl;",id)
  this.showroomId = id + '';
  this.showDeleteModal = true;
}

confirmDelete() {
  
  this.showroomService.delteShowroom(this.showroomId).subscribe({
      next: (response) => {
        this.toastService.show('Success: Showroom deleted', 'info');
      },
      error: (err) => {
        let error = err?.error?.message as string
        console.error('Error happened', err);
        this.toastService.show(error || "Somthing went wrong", 'error');
      }
    })
    this.showDeleteModal = false;
}

cancelDelete() {
  this.showDeleteModal = false;
  this.showroomId = '';
}
  fetchItems(page: number, size: number, sortBy:string ='name', sortDir:string ='asc') {
    this.showroomService.getShowrooms(page,size,sortBy,sortDir).subscribe(response => {
    console.log("data::::::::::",response)
    this.showroomList = response.content;
    this.pageSize = response.size;
    this.totalElements = response.totalElements;
  });
}



  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchItems(page, this.pageSize);
  }
  sortBy(column: string) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }
        this.fetchItems(this.currentPage, this.pageSize, this.sortedColumn , this.sortDirection);

  }

  onAction(){
    console.log("test")
  }
  
}
