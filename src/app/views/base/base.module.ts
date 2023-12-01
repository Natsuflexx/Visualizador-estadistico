import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { ChartDataset, ChartOptions, Chart } from 'chart.js';

// CoreUI Modules
import {
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// utils
import { DocsComponentsModule } from '@docs-components/docs-components.module';

// views

import { FamiliaresComponent } from './familiares/familiares.component';
import { GastosComponent } from './gastos/gastos.component';
import { JefaturaComponent } from './jefatura/jefatura.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { ChartpiedecilComponent } from './gastos/chartpiedecil/chartpiedecil.component';


@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    ChartjsModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    DocsComponentsModule,
    
  ],
  declarations: [
    FamiliaresComponent,
    GastosComponent,
    JefaturaComponent,
    ChartpiedecilComponent 
  ],
})
export class BaseModule {}
