import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralMessageComponent } from './pages/central-message.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiErrorInterceptor } from './interceptors/api-error.interceptor';
import { CentralMessageService } from './services/central-message.service';
import { AbstractCentralMessage } from './models/abstract-central-message';

@NgModule({
  declarations: [CentralMessageComponent],
  exports: [CentralMessageComponent],
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
    { provide: AbstractCentralMessage, useClass: CentralMessageService },
  ],
})
export class CentralMessageModule {}
