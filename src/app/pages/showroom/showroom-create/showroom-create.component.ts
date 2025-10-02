import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { FormComponent } from "../../../shared/components/form/form.component";
import { FieldConfig } from "../../../shared/models/fieldFormConfig";
import { ToastService } from "../../../services/toast.service";
import { ShowroomService } from "../../../services/showroom.service";
import { Router } from "@angular/router";


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
      name: 'commercialRegistrationNumber',
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
      name: 'mangerName',
      label: 'Manager Name',
      type: 'text',
      controlType: 'input',
      placeholder: 'Enter manager name',
      validators: [
        Validators.maxLength(100)
      ]
    },
    {
      name: 'contactNumber',
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

  constructor(private toastService: ToastService, private showroomService: ShowroomService, private router: Router) { }



  submitData(data: any) {
    console.log("submited form", data);
    this.showroomService.createShowroom(data).subscribe({
      next: (response) => {
        this.toastService.show('Success: Showroom created', 'info');
        this.router.navigate(['/showroom']);
      },
      error: (err) => {
        let error = err?.error?.message as string
        console.error('Error happened', err);
        this.toastService.show(error || "Somthing went wrong", 'error');
      }
    })

  }
}
