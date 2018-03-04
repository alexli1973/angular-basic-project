import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutsComponent} from './layouts/layouts.component';

const routes: Routes = [
  {path: '', redirectTo: 'system/items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
