import { CardEventModule } from './../../commons/components/card-event/card-event.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, CardEventModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
