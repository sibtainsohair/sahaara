import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { PgnfComponent } from './pgnf/pgnf.component';
import { ChefComponent } from './chef/chef.component';
import { OrderComponent } from './order/order.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginchefComponent } from './loginchef/loginchef.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { ViewchefComponent } from './viewchef/viewchef.component';


const routes: Routes = [
  {path: '', redirectTo: '/viewchef', pathMatch:'full'},
  {path: 'viewmenu', component: ViewmenuComponent},
  {path: 'customer', component: CustomerComponent},
    {path: 'chef', component: ChefComponent},
  {path: 'order', component: OrderComponent},
  {path: 'loginchef', component: LoginchefComponent},
  {path: 'logincustomer', component: LogincustomerComponent},
  {path: 'addmenu', component: AddmenuComponent},
  {path: 'viewchef', component: ViewchefComponent},
  {path: '**', component: PgnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
