import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';


interface Filter {
  key: string;  
  label: string;
}

@Component({
  selector: 'app-filters',
  imports: [NgClass,ReactiveFormsModule, CommonModule, FormComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  isCollapsed = true;

 
  @Input() filters: Filter[] = []; // example: [{ key: 'name', label: 'Name' }, { key: 'city', label: 'City' }]
  @Output() apply = new EventEmitter<any>();

  filtersForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  
  ngOnInit() {
    // Create form group dynamically based on filters
    const controls: any = {};
    this.filters.forEach(f => controls[f.key] = ['']);
    this.filtersForm = this.fb.group(controls);
  }

  applyFilters() {
    // Emit form values to parent
    this.apply.emit(this.filtersForm.value);
  }
}
