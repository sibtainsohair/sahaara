import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { PgnfComponent } from './pgnf/pgnf.component';
import { ChefComponent } from './chef/chef.component';
import { OrderComponent } from './order/order.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginchefComponent } from './loginchef/loginchef.component';

const routes: Routes = [
  {path: '', redirectTo: '/viewmenu', pathMatch:'full'},
  {path: 'customer', component: CustomerComponent},
  {path: 'viewmenu', component: ViewmenuComponent},
  {path: 'chef', component: ChefComponent},
  {path: 'order', component: OrderComponent},
  {path: 'logincustomer', component: LogincustomerComponent},
  {path: 'loginchef', component: LoginchefComponent}, 
  {path: '**', component: PgnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
