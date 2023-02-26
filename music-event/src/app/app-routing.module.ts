import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login-page/login.component';
import { RecoveryPassPageComponent } from './pages/recovery-pass-page/recovery-pass-page.component';
import { RegistroComponent } from './pages/registro-page/registro.component';

const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Registro',
    component: RegistroComponent,
  },
  {
    path: 'recovery-pass',
    title: 'recovery-pass',
    component: RecoveryPassPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
