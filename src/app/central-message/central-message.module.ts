import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralMessageComponent } from './pages/central-message.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiErrorInterceptor } from './interceptors/api-error.interceptor';
import { CentralMessageService } from './services/central-message.service';
import { AbstractCentralMessage } from './models/abstract-central-message';
import { CentralMessageConfiguratinService } from './services/central-message-configuratin.service';

@NgModule({
  declarations: [CentralMessageComponent],
  exports: [CentralMessageComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {provide: APP_INITIALIZER, useFactory: (configService: CentralMessageConfiguratinService) => () => {
      configService.loadConfiguration().toPromise()
    },
    deps: [CentralMessageConfiguratinService],
    multi: true
  },
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
    { provide: AbstractCentralMessage, useClass: CentralMessageService },
  ],
})
export class CentralMessageModule {}
