import { Component, OnInit } from '@angular/core';
import { Toast } from '../../models/fieldFormConfig';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-toast',
  imports: [],
 templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

ngOnInit(): void {
  this.toastService.getToasts().subscribe(toast => {
    console.log('Toast received:', toast); // <-- check if this logs
    this.toasts.push(toast);

    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t.id !== toast.id);
    }, toast.duration ?? 3000);
  });
}

}
