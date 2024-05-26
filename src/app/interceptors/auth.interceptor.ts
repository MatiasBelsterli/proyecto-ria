import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token'); // O donde sea que almacenes el token
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `${token}`)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
