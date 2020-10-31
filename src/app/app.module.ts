import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './common/material.module';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {EventService} from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatDialogModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
