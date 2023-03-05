import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoComponent } from './mantenimiento.component';
import { VentasComponent } from './ventas/ventas.component';
import { EventosComponent } from './eventos/eventos.component';
import { GenerosComponent } from './generos/generos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';

@NgModule({
  declarations: [
    MantenimientoComponent,
    VentasComponent,
    EventosComponent,
    GenerosComponent,
    ReportesComponent,
  ],
  imports: [CommonModule, MantenimientoRoutingModule],
  exports: [MantenimientoComponent],
})
export class MantenimientoModule {}
