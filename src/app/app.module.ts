import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MainModule } from './components/main/main.module';
import {  NO_ERRORS_SCHEMA} from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FlexLayoutModule,
    MainModule
    ],
    exports: [
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
