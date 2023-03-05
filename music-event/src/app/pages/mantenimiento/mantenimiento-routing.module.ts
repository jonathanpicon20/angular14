import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './ventas/ventas.component';
import { EventosComponent } from './eventos/eventos.component';
import { GenerosComponent } from './generos/generos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MantenimientoComponent } from './mantenimiento.component';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoComponent,
    children: [
      {
        path: 'ventas',
        title: 'ventas',
        component: VentasComponent,
      },
    ],
  },
  // {
  //   path: 'ventas',
  //   title: 'ventas',
  //   component: VentasComponent,
  // },
  // {
  //   path: 'eventos',
  //   title: 'eventos',
  //   component: EventosComponent,
  // },
  // {
  //   path: 'generos',
  //   title: 'generos',
  //   component: GenerosComponent,
  // },
  // {
  //   path: 'reportes',
  //   title: 'reportes',
  //   component: ReportesComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoRoutingModule {}
