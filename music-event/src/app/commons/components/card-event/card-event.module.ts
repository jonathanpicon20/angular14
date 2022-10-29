import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEventComponent } from './card-event.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CardEventComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardEventComponent],
})
export class CardEventModule {}
