import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from './api';
import { DOCUMENT } from '@angular/common';
import { Showroom } from '../shared/models/showroom';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {

  // constructor(@Inject(DOCUMENT) private document: Document,private http: HttpClient) {}
  constructor(private http: HttpClient) {}

  getShowrooms(page: number = 1, size: number =5, sortBy:string ='name', sortDir:string ='asc' ): Observable<any> {
    return this.http.get<any>( api.apiBaseUrl + `showroom?pageNo=${page}&pageSize=${size}&sortBy=${sortBy}&sortDir=${sortDir}`);
  }

  getShowroom(id: string): Observable<Showroom> {
    return this.http.get<Showroom>( api.apiBaseUrl + `showroom/${id}`);
  }

    createShowroom(data: any): Observable<any> {
    return this.http.post<any>(api.apiBaseUrl + `showroom`,data);
  }

      updateShowroom(id: string, data: any): Observable<any> {
    return this.http.patch<any>(api.apiBaseUrl + `showroom/${id}`,data);
  }

    delteShowroom(id: string): Observable<Showroom> {
    return this.http.delete<Showroom>( api.apiBaseUrl + `showroom/${id}`);
  }

      listShowroom(): Observable<Showroom[]> {
    return this.http.get<Showroom[]>( api.apiBaseUrl + `showroom/list`);
  }
}
