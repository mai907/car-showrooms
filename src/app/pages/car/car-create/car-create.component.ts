import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { FormComponent } from '../../../shared/components/form/form.component';
import { FieldConfig } from '../../../shared/models/fieldFormConfig';
import { ToastService } from '../../../services/toast.service';
import { ShowroomService } from '../../../services/showroom.service';
import { Router } from '@angular/router';
import { Showroom } from '../../../shared/models/showroom';
import { CarService } from '../../../services/car.service';




@Component({
  selector: 'app-car-create',
  imports: [ReactiveFormsModule, CommonModule, FormComponent],
  templateUrl: './car-create.component.html',
  styleUrl: './car-create.component.css'
})
export class CarCreateComponent {
  showroomList = signal<Showroom[]>([]);

  fields:FieldConfig[] =[
      { name: 'vin', label: 'VIN', type: 'text', controlType: 'input', placeholder: 'Enter VIN', validators: [Validators.required, Validators.maxLength(25)] },
      { name: 'maker', label: 'Maker', controlType: 'input',  validators: [Validators.required] },
      { name: 'model', label: 'Model', type: 'text', controlType: 'input', placeholder: 'Enter Model', validators: [Validators.required, Validators.maxLength(25)] },
      { name: 'modelYear', label: 'Model Year', controlType: 'input',  validators: [Validators.required, Validators.pattern(/^[0-9]{4}$/)] },
      { name: 'price', label: 'Price', type: 'text', controlType: 'input', placeholder: 'Enter Price', validators: [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)] },
      { name: 'showroom', label: 'Showroom', controlType: 'select', options: this.showroomList(), validators: [Validators.required] }

  ];


    constructor(private toastService: ToastService,
       private showroomService: ShowroomService,
        private router: Router,
      private carService:CarService) {
        effect(()=>{
              const showroomField = this.fields.find(f => f.name === 'showroom');
    if (showroomField) {
      showroomField.options = this.showroomList();
    }
  });
        
       }

    ngOnInit(){  
      this.showroomService.listShowroom().subscribe({
      next: (responses) => {
          this.showroomList.set(responses); 
      },
      error: (err) => {
        let error = err?.error?.message as string
        console.error('Error happened', err);
        this.toastService.show(error || "Somthing went wrong", 'error');
      }
    });
  }


  submitData(formValues:any) {
    console.log("alll",formValues, formValues.showroom);
        this.carService.createCar(formValues,formValues.showroom).subscribe({
      next: (response) => {
        this.toastService.show('Success: Car created', 'info');
        this.router.navigate(['/cars']);
      },
      error: (err) => {
        let error = err?.error?.message as string
        console.error('Error happened', err);
        this.toastService.show(error || "Somthing went wrong", 'error');
      }
    })
  }
}
