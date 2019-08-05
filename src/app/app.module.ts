import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { PgnfComponent } from './pgnf/pgnf.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { ChefComponent } from './chef/chef.component';
import { OrderComponent } from './order/order.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginchefComponent } from './loginchef/loginchef.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { PublicviewComponent } from './publicview/publicview.component';
import { PrivateviewComponent } from './privateview/privateview.component';
import { LoginviewsComponent } from './loginviews/loginviews.component';
import { SignupiewsComponent } from './signupiews/signupiews.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavigationComponent,
    ViewmenuComponent,
    PgnfComponent,
    ChefComponent,
    OrderComponent,
    LogincustomerComponent,
    LoginchefComponent,
    AddmenuComponent,
    PublicviewComponent,
    PrivateviewComponent,
    LoginviewsComponent,
    SignupiewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
