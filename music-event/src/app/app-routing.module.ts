import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecoveryPassPageComponent } from './pages/recovery-pass-page/recovery-pass-page.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { VentasComponent } from './pages/mantenimiento/ventas/ventas.component';
import { GenerosComponent } from './pages/mantenimiento/generos/generos.component';
import { ReportesComponent } from './pages/mantenimiento/reportes/reportes.component';
import { EventosComponent } from './pages/mantenimiento/eventos/eventos.component';
import { RegistroPageModule } from './pages/registro-page/registro-page.module';

const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    title: 'Login',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'register',
    title: 'Registro',
    loadChildren: () =>
      import('./pages/registro-page/registro-page.module').then(
        (m) => m.RegistroPageModule
      ),
  },
  {
    path: 'recovery-pass',
    title: 'recovery-pass',
    component: RecoveryPassPageComponent,
  },
  {
    path: 'mantenimiento',
    title: 'mantenimiento',
    component: MantenimientoComponent,
    children: [
      {
        path: 'ventas',
        title: 'ventas',
        component: VentasComponent,
      },
      {
        path: 'eventos',
        title: 'eventos',
        component: EventosComponent,
        children: [
          {
            path: 'generos',
            title: 'generos',
            component: GenerosComponent,
            children: [
              {
                path: 'reportes',
                title: 'reportes',
                component: ReportesComponent,
              },
            ],
          },
        ],
      },

      {
        path: 'generos',
        title: 'generos',
        component: GenerosComponent,
      },
      {
        path: 'reportes',
        title: 'reportes',
        component: ReportesComponent,
      },
    ],
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
