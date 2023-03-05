import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistroComponent } from './registro.component';
import { MatSelectModule } from '@angular/material/select';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RegistroComponent,
  },
];
@NgModule({
  declarations: [RegistroComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ],
  exports: [RegistroComponent],
})
export class RegistroPageModule {}
