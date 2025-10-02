import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() totalItems: number = 0;    // total items
  @Input() pageSize: number = 10;     // items per page
  @Input() currentPage: number = 1;   // current page

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize) || 1; // at least 1 page
  }

  get pages(): number[] {
    const total = this.totalPages;
    let start = this.currentPage - 1;  // sliding window start
    if (start < 1) start = 1;
    let end = start + 2;               // always 3 pages
    if (end > total) {
      end = total;
      start = Math.max(end - 2, 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  next() {
    this.goToPage(this.currentPage + 1);
  }

  prev() {
    this.goToPage(this.currentPage - 1);
  }
}
