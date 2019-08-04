import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { PgnfComponent } from './pgnf/pgnf.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavigationComponent,
    ViewmenuComponent,
    PgnfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
