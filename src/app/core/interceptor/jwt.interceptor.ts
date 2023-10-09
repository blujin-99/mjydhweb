import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let token: string | null = localStorage.getItem('jwt');

    let req = request;

    if(token){
      req = request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      });

    }

    return next.handle(req);
  }
}
