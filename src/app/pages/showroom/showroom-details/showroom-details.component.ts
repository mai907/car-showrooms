import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowroomService } from '../../../services/showroom.service';
import { Showroom } from '../../../shared/models/showroom';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-showroom-details',
  imports: [],
  templateUrl: './showroom-details.component.html',
  styleUrl: './showroom-details.component.css'
})
export class ShowroomDetailsComponent {
 data = {} as Showroom; 

  constructor(private router: Router,
     private showroomService:ShowroomService,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}


  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.showroomService.getShowroom(id).subscribe( {
      next:(response) =>{
        this.data = response   
      },
     error: (err) => {
        let error = err?.error?.message as string
        console.error('Error happened', err);
        this.toastService.show(error || "Somthing went wrong", 'error');
      }
 
  }

);
  }

  submitData(values:any) {
    console.log("alll",values);
  }
  edit() {
    // Navigate to the edit page for this showroom
    this.router.navigate(['/showroom/update', this.data.id]);
  }
}
