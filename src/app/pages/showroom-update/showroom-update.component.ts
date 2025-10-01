import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-showroom-update',
  imports: [ReactiveFormsModule, CommonModule, FormComponent],
  templateUrl: './showroom-update.component.html',
  styleUrl: './showroom-update.component.css'
})
export class ShowroomUpdateComponent {
  showroomForm: FormGroup;

  fields = [
    { label: 'Manager Name', type: 'text', name: 'manager', placeholder: 'Enter manager name' },
    { label: 'Contact Number', type: 'text', name: 'contact', placeholder: 'Enter phone number' },
    { label: 'Address', type: 'text', name: 'address', placeholder: 'Enter address' }
  ];

  constructor(private fb: FormBuilder) {
    this.showroomForm = this.fb.group({
      manager: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  submitData(event:Event) {
    console.log(this.showroomForm.value);
  }

}
