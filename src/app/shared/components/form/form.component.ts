import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
interface FieldConfig {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
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

  onSubmit(data:any) {
    if (this.formGroup.valid) {
      this.submitted.emit();
    }
  }
}
