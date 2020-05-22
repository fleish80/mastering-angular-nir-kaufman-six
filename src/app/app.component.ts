import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {}

  generateCode(status: number) {
    return this.httpClient.get(`http://httpstat.us/${status}?sleep=2000`).subscribe();
  }

}
