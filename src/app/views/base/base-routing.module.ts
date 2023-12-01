import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JefaturaComponent } from './jefatura/jefatura.component';
import { FamiliaresComponent } from './familiares/familiares.component';
import { GastosComponent } from './gastos/gastos.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Indicadores',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'jefatura',
        component: JefaturaComponent,
        data: {
          title: 'Tamaño y Jefatura',
        },
      },
      {
        path: 'familiares',
        component: FamiliaresComponent,
        data: {
          title: 'Hogares Familiares',
        },
      },
      {
        path: 'gastos',
        component: GastosComponent,
        data: {
          title: 'Ingresos y Gastos',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

