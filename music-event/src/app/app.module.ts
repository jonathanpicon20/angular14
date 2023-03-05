import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRountingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerModule } from './commons/components/container/container.module';
import { RecoveryPassPageModule } from './pages/recovery-pass-page/recovery-pass-page.module';
import { MantenimientoModule } from './pages/mantenimiento/mantenimiento.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContainerModule,
    AppRountingModule,
    RecoveryPassPageModule,
    MantenimientoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
