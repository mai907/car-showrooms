import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
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
  selector: 'app-car-create',
  imports: [ReactiveFormsModule, CommonModule, FormComponent],
  templateUrl: './car-create.component.html',
  styleUrl: './car-create.component.css'
})
export class CarCreateComponent {
  // showroomForm: FormGroup;
showroomList=[{id:1,name:"test"}, {id:2,name:"test2"},{id:3,name:"test3"}]
  fields:FieldConfig[] =[
      { name: 'vin', label: 'VIN', type: 'text', controlType: 'input', placeholder: 'Enter VIN', validators: [Validators.required, Validators.maxLength(25)] },
      { name: 'maker', label: 'Maker', controlType: 'input',  validators: [Validators.required] },
      { name: 'model', label: 'Model', type: 'text', controlType: 'input', placeholder: 'Enter Model', validators: [Validators.required, Validators.maxLength(25)] },
      { name: 'model_year', label: 'Model Year', controlType: 'input',  validators: [Validators.required, Validators.pattern(/^[0-9]{4}$/)] },
      { name: 'price', label: 'Price', type: 'text', controlType: 'input', placeholder: 'Enter Price', validators: [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)] },
      { name: 'showroom', label: 'Showroom', controlType: 'select', options: this.showroomList, validators: [Validators.required] }

  ];

  // constructor(private fb: FormBuilder) {
  //   this.showroomForm = this.fb.group({
  //     vin: ['', [Validators.required, Validators.maxLength(25)]],
  //     maker: ['', [Validators.required, Validators.maxLength(25)]],
  //     model: ['', [Validators.required, Validators.maxLength(25)]],
  //     model_year: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
  //     price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]

  //   });
  // }


  submitData(formValues:any) {
    console.log("alll",formValues);
  }
}
