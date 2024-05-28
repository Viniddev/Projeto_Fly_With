import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, endWith } from 'rxjs';
import { AutenticationService } from '../services/autentication.service';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  constructor(private tokenservice:AutenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenservice.possuiToken()){
      const token = this.tokenservice.retornarToken()
      request = request.clone({
        setHeaders:{
          'Authorization': `Bearer ${token}`
        }
      });
    }

    return next.handle(request);

  }
}
