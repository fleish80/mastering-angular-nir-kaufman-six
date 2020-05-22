import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentralMessageModule } from './central-message/central-message.module';
import { CentralMessageComponent } from './central-message/pages/central-message.component';


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
  providers: [],
  bootstrap: [AppComponent, CentralMessageComponent]
})
export class AppModule { }
