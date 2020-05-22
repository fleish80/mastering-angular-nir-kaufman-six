import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentralMessageService } from './central-message/services/central-message.service';
import { MessageType } from './central-message/models/central-message.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private httpClient: HttpClient, private centralMessageService: CentralMessageService) {}

  generateCode(status: number) {
    this.httpClient.get(`http://httpstat.us/${status}?sleep=2000`).subscribe();
    if (status === 200) {
      this.centralMessageService.setMessage({
        type: MessageType.Success,
        description: 'YES!'
      })
    }
  }

}
