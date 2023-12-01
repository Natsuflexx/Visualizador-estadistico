import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaracteristicaComponent } from './caracteristica/caracteristica.component';
import { OcupacionComponent } from './ocupacion/ocupacion.component';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Indicadores'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buttons'
      },
      {
        path: 'caracteristica',
        component: CaracteristicaComponent,
        data: {
          title: 'Características'
        }
      },
      {
        path: 'ocupacion',
        component: OcupacionComponent,
        data: {
          title: 'Formas de Ocupación'
        }
      },
      {
        path: 'disponibilidad',
        component: DisponibilidadComponent,
        data: {
          title: 'Disponibilidad de recursos'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {
}
