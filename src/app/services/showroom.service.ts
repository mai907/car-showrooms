import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {

  constructor(private http: HttpClient) {}

  getShowroom(id: number): Observable<any> {
    return this.http.get<any>(`/api/showrooms/${id}`);
  }
}
