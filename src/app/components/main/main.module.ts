import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { HomeModule } from '../home/home.module';
import { MatModulesModule } from 'src/app/modules/mat-modules/mat-modules.module';
import { ImgRowComponent } from '../img-row/img-row.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    MainComponent,
    ImgRowComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    MatModulesModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    MainComponent,
    ImgRowComponent
  ]
})
export class MainModule { }
