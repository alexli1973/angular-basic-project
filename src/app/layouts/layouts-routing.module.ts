import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutsComponent} from './layouts.component';
import {ItemsComponent} from './items/items.component';
import {OrdersComponent} from './orders/orders.component';
import {ItemDetailComponent} from './items/item-detail/item-detail.component';

const routes: Routes = [
  {path: 'system', component: LayoutsComponent,
    children: [
    {path: 'items', component: ItemsComponent},
    {path: 'items/:id', component: ItemDetailComponent},
    {path: 'orders', component: OrdersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LayoutsRoutingModule { }
