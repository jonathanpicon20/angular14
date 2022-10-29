import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerModule } from './commons/components/container/container.module';
import { LoginComponent } from './pages/login-page/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRountingModule } from './app-routing.module';
import { RegistroComponent } from './pages/registro-page/registro.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistroComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContainerModule,
    AppRountingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
