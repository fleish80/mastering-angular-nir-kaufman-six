import { MESSAGE_LOGGERS } from './central-message/tokens/message-loggers';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentralMessageModule } from './central-message/central-message.module';
import { CentralMessageComponent } from './central-message/pages/central-message.component';
import { MessageConsoleLogger } from './models/message-console-logger';
import { ServerConsoleLogger } from './models/server-console-logger';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CentralMessageModule
  ],
  providers: [
    { provide: MESSAGE_LOGGERS, useClass: MessageConsoleLogger, multi: true },
    { provide: MESSAGE_LOGGERS, useClass: ServerConsoleLogger, multi: true }
  ],
  bootstrap: [AppComponent, CentralMessageComponent]
})
export class AppModule { }
