import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';

import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HomePageModule } from '../../../pages/home-page/home-page.module';
import { LoginPageModule } from '../../../pages/login-page/login-page.module';
import { RegistroComponent } from '../../../pages/registro-page/registro.component';
import { CardEventModule } from '../card-event/card-event.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    RegistroComponent,
  ],
  exports: [ContainerComponent],
  imports: [
    MatButtonModule,
    CardEventModule,
    RouterModule,
    HomePageModule,
    LoginPageModule,
  ],
})
export class ContainerModule {}
