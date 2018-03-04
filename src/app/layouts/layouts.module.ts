import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from '../shared/components/sidebar/sidebar.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {LayoutsComponent} from './layouts.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import {LayoutsRoutingModule} from './layouts-routing.module';
import { AddItemComponent } from './items/add-item/add-item.component';
import { EditItemComponent } from './items/edit-item/edit-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ConnectService} from '../shared/services/connect.service';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    ReactiveFormsModule
  ],

  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LayoutsComponent,
    ItemsComponent,
    OrdersComponent,
    AddItemComponent,
    EditItemComponent,
    ItemDetailComponent
  ],
  providers: [],
})
export class LayoutsModule { }
