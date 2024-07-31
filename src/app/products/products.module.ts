import { UncommonPageComponent } from './pages/uncommonPage/uncommonPage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersPageComponent } from './pages/numbersPage/numbersPage.component';
import { BasicsPageComponent } from './pages/basicsPage/basicsPage.component';
import { OrderComponent } from './pages/order/order.component';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { ToggleCase } from './pipes/toggle-case.pipe';
import { CanFlyCase } from './pipes/canfly-case.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    ProductsComponent,

    NumbersPageComponent,
    BasicsPageComponent,
    UncommonPageComponent,
    OrderComponent,
    //Pipes
    ToggleCase,
    CanFlyCase,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
