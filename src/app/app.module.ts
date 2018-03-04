import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LayoutsModule} from './layouts/layouts.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConnectService} from './shared/services/connect.service';
import { HttpClientModule} from '@angular/common/http';
import {SharingService} from './shared/services/sharing.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    LayoutsModule,

  ],
  providers: [ConnectService, SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
