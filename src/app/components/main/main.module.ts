import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    MainComponent
  ]
})
export class MainModule { }
