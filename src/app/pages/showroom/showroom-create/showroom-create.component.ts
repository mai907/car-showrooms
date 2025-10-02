import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { FormComponent } from "../../../shared/components/form/form.component";

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
  selector: "app-showroom-create",
  imports: [ReactiveFormsModule, CommonModule, FormComponent],
  templateUrl: "./showroom-create.component.html",
  styleUrl: "./showroom-create.component.css",
})
export class ShowroomCreateComponent {

  fields: FieldConfig[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      controlType: 'input',
      placeholder: 'Enter name',
      validators: [
        Validators.required,
        Validators.maxLength(100)
      ]
    },
    {
      name: 'commercial_registration_number',
      label: 'CR Number',
      type: 'number',
      controlType: 'input',
      placeholder: 'Enter CR number',
      validators: [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]
    },
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
  



  submitData(data: any) {
    console.log("submited form", data);
  }
}
