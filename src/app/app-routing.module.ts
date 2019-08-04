import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { PgnfComponent } from './pgnf/pgnf.component';

const routes: Routes = [
  {path: '', redirectTo: '/viewmenu', pathMatch:'full'},
  {path: 'customer', component: CustomerComponent},
  {path: 'viewmenu', component: ViewmenuComponent},
  {path: '**', component: PgnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
