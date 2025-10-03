import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { api } from './api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private userKey = 'currentUser';

    constructor(private http: HttpClient) {}

  setUser(user: any) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): any {
    if (typeof localStorage === 'undefined') {
      return null;
    }
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  hasRole(role: string): boolean {
    return this.getUser()?.role?.includes(role);
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  logout() {
    localStorage.removeItem(this.userKey);
  }
    login(username: string, password: string): Observable<any> {
    return this.http.post(api.apiBaseUrl + 'login', { username, password }).pipe(
      tap(user => {
        localStorage.setItem(this.userKey, JSON.stringify({...user,'password':password})); 
      })
    );
  }
}
