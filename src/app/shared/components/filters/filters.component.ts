import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


interface Filter {
  key: string;  
  label: string;
}

@Component({
  selector: 'app-filters',
  imports: [NgClass,ReactiveFormsModule, CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  isCollapsed = false;

 
  @Input() filters: Filter[] = []; 
  @Output() apply = new EventEmitter<any>();

  filtersForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  
  ngOnInit() {
    const controls: any = {};
    this.filters.forEach(f => controls[f.key] = ['']);
    this.filtersForm = this.fb.group(controls);
  }

  applyFilters() {
    this.apply.emit(this.filtersForm.value);
  }
}
