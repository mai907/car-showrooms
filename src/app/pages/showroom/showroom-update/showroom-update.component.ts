import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { FormComponent } from '../../../shared/components/form/form.component';
// import { ShowroomService } from '../../../services/showroom.service';

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
  formGroup: FormGroup = new FormGroup({});
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
  data = {
    "id": 1,
    "name": "showroom1",
    "commercialRegistrationNumber": 1234567890,
    "mangerName": "tester",
    "contactNumber": 599867099,
    "address": "address-home-2"
}


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();

      this.formGroup.patchValue({
        manager_name: this.data.mangerName || '',
        contact_number: this.data.contactNumber || '',
        address: this.data.address || '',
      });
    // const showroomId = 1; 
    // this.showroomService.getShowroom(showroomId).subscribe((data) => {
    //   this.formGroup.patchValue({
    //     manager_name: data.mangerName || '',
    //     contact_number: data.contactNumber || '',
    //     address: data.address || '',
    //   });
    // });
  }

  createForm() {
    const group: any = {};
    this.fields.forEach((field) => {
      group[field.name] = ['', field.validators || []];
    });
    this.formGroup = this.fb.group(group);
  }

  submitData(values:any) {
    console.log("alll",values);
  }

}
