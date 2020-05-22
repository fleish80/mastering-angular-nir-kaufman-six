import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/central-message.types';

@Injectable({
  providedIn: 'root'
})
export class CentralMessageService {

  private _messages: BehaviorSubject<Message[]>;
  private _messageQueue: Message[];

  readonly messages$: Observable<Message[]>;

  constructor() {
    this._messages = new BehaviorSubject<Message[]>([]);
    this._messageQueue = [];
    this.messages$ = this._messages.asObservable();
   }

   public setMessage(message: Message): void {
     this._messageQueue.push(message);
     this._messages.next([...this._messageQueue]);// messages array is reacreated with new instnace, we don't want to return original instance of array
   }

   public removeMessage(message: Message): void {
    const index = this._messageQueue.indexOf(message);
    this._messageQueue.splice(index, 1);
    this._messages.next([...this._messageQueue]);
  }
}
