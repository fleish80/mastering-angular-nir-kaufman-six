import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/central-message.types';
import { CentralMessageService } from '../services/central-message.service';

@Component({
  selector: 'app-central-message',
  templateUrl: './central-message.component.html',
  styleUrls: ['./central-message.component.scss']
})
export class CentralMessageComponent implements OnInit {

  messages$: Observable<Message[]>

  constructor(private centralMessageService: CentralMessageService) { }

  ngOnInit(): void {
    this.messages$ = this.centralMessageService.messages$;
  }

  remove(message: Message): void {
    this.centralMessageService.removeMessage(message);
  }

}
