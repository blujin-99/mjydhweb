import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  
  unAuthorized = new BehaviorSubject<boolean>(false)
  $unauthorized = this.unAuthorized.asObservable()

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          localStorage.removeItem('MJYDH_JWT'); 
          localStorage.removeItem('MJYDH_CAS');
          this.unAuthorized.next(true);
        }
        return throwError(error);
      })
    );
  }
}
