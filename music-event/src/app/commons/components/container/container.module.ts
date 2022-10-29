import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';

import { MatButtonModule } from '@angular/material/button';
import { CardEventModule } from '../card-event/card-event.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContainerComponent],
  exports: [ContainerComponent],
  imports: [MatButtonModule, CardEventModule, RouterModule],
})
export class ContainerModule {}
