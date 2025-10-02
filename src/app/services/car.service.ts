import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from './api';
import { Car } from '../shared/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 constructor(private http: HttpClient) {}

  getCars(page: number = 1, size: number =5,filters:any={}): Observable<any> {
    return this.http.patch<any>( api.apiBaseUrl + `showroom/car?pageNo=${page}&pageSize=${size}`, filters);
  }

    createCar(data: any, showroomId:string): Observable<any> {
    return this.http.post<any>(api.apiBaseUrl + `showroom/car/${showroomId}`,data);
  }


}
