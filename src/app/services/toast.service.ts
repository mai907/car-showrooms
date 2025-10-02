import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Toast } from '../shared/models/fieldFormConfig';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<Toast>();
  private counter = 0;

  getToasts(): Observable<Toast> {
    return this.toastSubject.asObservable();
  }

  show(message: string, type: 'info' | 'error' = 'info', duration: number = 3000) {
    const toast: Toast = {
      message,
      type,
      id: this.counter++,
      duration
    };
    this.toastSubject.next(toast);
  }
}
