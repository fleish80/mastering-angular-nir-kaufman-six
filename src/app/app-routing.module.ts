import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MESSAGE_LOGGERS } from './central-message/tokens/message-loggers';
import { MessageConsoleLogger } from './models/message-console-logger';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
