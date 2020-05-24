import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractCentralMessage } from '../models/abstract-central-message';
import { Message } from '../models/central-message.types';

@Component({
  selector: 'app-central-message',
  templateUrl: './central-message.component.html',
  styleUrls: ['./central-message.component.scss']
})
export class CentralMessageComponent implements OnInit {

  messages$: Observable<Message[]>

  constructor(private centralMessageService: AbstractCentralMessage) { }

  ngOnInit(): void {
    this.messages$ = this.centralMessageService.messages$;
  }

  remove(message: Message): void {
    this.centralMessageService.removeMessage(message);
  }

}
