import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-showroom-create',
  imports: [ReactiveFormsModule],
  templateUrl: './showroom-create.component.html',
  styleUrl: './showroom-create.component.css'
})
export class ShowroomCreateComponent {
type:string = 'create'

showroomForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  crNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  manager_name: new FormControl(''),
  contact_number: new FormControl(''),
  address: new FormControl(''),
})

submitData(){
  console.log("submited form")
}


}
