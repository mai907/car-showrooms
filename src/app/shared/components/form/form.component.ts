import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  controlType: 'input' | 'select';
  placeholder?: string;
  options?: { id: any, name: string }[]; 
  validators?: any[];  
}


@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Input() type: string = 'Submit';
  @Input() formGroup!: FormGroup;
  @Input() fields: FieldConfig[] = [];
  @Output() submitted = new EventEmitter<any>();

  isSubmitted = false
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
  ngOnInit() {
    if (!this.formGroup) {
    const group: any = {};
    this.fields.forEach(field => {
      group[field.name] = ['', field.validators || []];
    });
    this.formGroup = this.fb.group(group);
  }
  }

 
  

  onSubmit(event: Event) {
    this.isSubmitted = true;
  
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
  
    // Emit form values to parent
    this.submitted.emit(this.formGroup.value);
  }
  // edit() {
  //   this.isSubmitted = false;        
  // }
}
