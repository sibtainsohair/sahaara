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
import { LoginviewsComponent } from './loginviews/loginviews.component';
import { SignupiewsComponent } from './signupiews/signupiews.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/viewmenu', pathMatch:'full'},
  {path: 'viewmenu', component: ViewmenuComponent},
  {path: 'signup', component: SignupiewsComponent},
  {path: 'ordeur', component: OrderComponent},
  {path: 'login', component: LoginviewsComponent},
  {path: 'addmenu', component: AddmenuComponent}, 
  {path: '**', component: PgnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
