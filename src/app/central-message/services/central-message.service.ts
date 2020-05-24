import { MessageLogger } from './../models/message-logger';
import { MESSAGE_LOGGERS } from './../tokens/message-loggers';
import { Injectable, Inject, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/central-message.types';
import { AbstractCentralMessage } from '../models/abstract-central-message';

@Injectable({
  providedIn: 'root'
})
export class CentralMessageService extends AbstractCentralMessage {

  constructor(@Inject(MESSAGE_LOGGERS) @Optional() private loggers: MessageLogger[]) {
    super();
   }

   public setMessage(message: Message): void {
     this._messageQueue.push(message);
     this._messages.next([...this._messageQueue]);// messages array is reacreated with new instnace, we don't want to return original instance of array

     if (this.loggers?.length > 0) {
       this.loggers.forEach((logger: MessageLogger) => {
         logger.logMessage(message)
       })
     }

   }

   public removeMessage(message: Message): void {
    const index = this._messageQueue.indexOf(message);
    this._messageQueue.splice(index, 1);
    this._messages.next([...this._messageQueue]);
  }
}
