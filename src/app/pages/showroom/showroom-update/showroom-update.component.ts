import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { FormComponent } from '../../../shared/components/form/form.component';

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
  selector: 'app-showroom-update',
  imports: [ReactiveFormsModule, CommonModule, FormComponent],
  templateUrl: './showroom-update.component.html',
  styleUrl: './showroom-update.component.css'
})
export class ShowroomUpdateComponent {
  isUpdated=false;

  fields:FieldConfig[] = [
    {
      name: 'manager_name',
      label: 'Manager Name',
      type: 'text',
      controlType: 'input',
      placeholder: 'Enter manager name',
      validators: [
        Validators.maxLength(100)
      ]
    },
    {
      name: 'contact_number',
      label: 'Contact Number',
      type: 'number',
      controlType: 'input',
      placeholder: 'Enter phone number',
      validators: [
        Validators.required,
        Validators.pattern(/^\d{1,15}$/) 
      ]
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      controlType: 'input',
      placeholder: 'Enter address',
      validators: [
        Validators.maxLength(255) 
      ]
    }
  ];




  submitData(values:any) {
    console.log("alll",values);
  }

}
