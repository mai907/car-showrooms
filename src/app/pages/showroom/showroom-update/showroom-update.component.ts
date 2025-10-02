import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormComponent } from '../../../shared/components/form/form.component';
import { ShowroomService } from '../../../services/showroom.service';
import { FieldConfig } from '../../../shared/models/fieldFormConfig';
import { ToastService } from '../../../services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-showroom-update',
  imports: [ReactiveFormsModule, CommonModule, FormComponent],
  templateUrl: './showroom-update.component.html',
  styleUrl: './showroom-update.component.css'
})
export class ShowroomUpdateComponent {
  formGroup: FormGroup = new FormGroup({});
  isUpdated = false;
  showroomId = ''

  fields: FieldConfig[] = [
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



  constructor(private fb: FormBuilder,
    private showroomService: ShowroomService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.showroomId = this.route.snapshot.paramMap.get('id') || '';
    this.showroomService.getShowroom(this.showroomId).subscribe({
      next: (responses) => {
        this.formGroup.patchValue({
          mangerName: responses.mangerName || '',
          contactNumber: responses.contactNumber || '',
          address: responses.address || '',
        });
      },
      error: (err) => {
        let error = err?.error?.message as string
        console.error('Error happened', err);
        this.toastService.show(error || "Somthing went wrong", 'error');
      }


    });
  }

  createForm() {
    const group: any = {};
    this.fields.forEach((field) => {
      group[field.name] = ['', field.validators || []];
    });
    this.formGroup = this.fb.group(group);
  }

  submitData(values: any) {
    console.log("alll", values);
        this.showroomService.updateShowroom(this.showroomId, values).subscribe({
      next: (response) => {
        this.toastService.show('Success: Showroom updated', 'info');
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
