import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { CentralMessageService } from '../services/central-message.service';
import { MessageType } from '../models/central-message.types';
import { AbstractCentralMessage } from '../models/abstract-central-message';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {

  constructor(private centralMessageService: AbstractCentralMessage) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        this.centralMessageService.setMessage({
          type: MessageType.Error,
          description: 'Something bed happened'
        })
        return of(error);
      })
    );
  }
}
