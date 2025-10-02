import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showroom-details',
  imports: [],
  templateUrl: './showroom-details.component.html',
  styleUrl: './showroom-details.component.css'
})
export class ShowroomDetailsComponent {
  constructor(private router: Router) {}

data = {
    "id": 1,
    "name": "showroom1",
    "commercialRegistrationNumber": 1234567890,
    "mangerName": "tester",
    "contactNumber": 599867099,
    "address": "address-home-2"
}


  submitData(values:any) {
    console.log("alll",values);
  }
  edit() {
    // Navigate to the edit page for this showroom
    this.router.navigate(['/showroom/update', this.data.id]);
  }
}
