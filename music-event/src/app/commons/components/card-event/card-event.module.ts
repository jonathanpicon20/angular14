import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardEventComponent } from './card-event.component';

@NgModule({
  declarations: [CardEventComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardEventComponent],
})
export class CardEventModule {}
