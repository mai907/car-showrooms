import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from './api';
import { Showroom } from '../shared/models/showroom';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {

  constructor(private http: HttpClient) {}



  getShowrooms(page: number = 1, size: number =5, sortBy:string ='name', sortDir:string ='asc' ): Observable<any> {
    
  const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
const username = storedUser.username;
const password = storedUser.password;

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.get<any>( api.apiBaseUrl + `showroom?pageNo=${page}&pageSize=${size}&sortBy=${sortBy}&sortDir=${sortDir}`,{headers});
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
