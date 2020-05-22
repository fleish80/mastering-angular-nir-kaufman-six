import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralMessageComponent } from './pages/central-message.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiErrorInterceptor } from './interceptors/api-error.interceptor';



@NgModule({
  declarations: [CentralMessageComponent],
  exports: [CentralMessageComponent],
  imports: [
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true}]
})
export class CentralMessageModule { }
