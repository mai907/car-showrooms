import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const username = storedUser.username;
  const password = storedUser.password;

  if (username && password) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: 'Basic ' + btoa(`${username}:${password}`)
      }
    });
    return next(cloned); // use next(cloned) in interceptor function style
  }

  return next(req); // pass original request if no credentials
};
