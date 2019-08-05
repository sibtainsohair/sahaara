import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  signup_customer_url = 'https://customerfyp.herokuapp.com/customer';
  signup_chef_url = 'https://foodmaniafyp.herokuapp.com/chef';
  login_chef_url = 'https://foodmaniafyp.herokuapp.com/chefs/login'
  login_customer_url = 'https://customerfyp.herokuapp.com/customer/login'
  add_menu_url = "https://foodmaniafyp.herokuapp.com/menu";

  constructor(private http: HttpClient) { }

  public signupCustomer(signupCustomerDetail) {
    return this.http.post<any>(this.signup_customer_url, signupCustomerDetail);
  }

  public signupChef(signupChefDetail) {
    return this.http.post<any>(this.signup_chef_url, signupChefDetail);
  }

  public loginChef(loginChefDetail) {
    return this.http.post<any>(this.login_chef_url, loginChefDetail);
  }

  public loginCustomer(loginCustomerDetail) {
    return this.http.post<any>(this.login_customer_url, loginCustomerDetail);
  }

  public addMenu(addMenuDetail) {
    return this.http.post<any>(this.add_menu_url, addMenuDetail);
  }
}
export class SignupCustomerDetails{
  constructor(
    public customer_name:String,
    public customer_no:String,
    public customer_contact:String,
    public email:String,
    public password:String,
    public customer_address:String){}


}
export class SignupChefDetails{
  constructor(
    public chef_name:String,
    public chef_contact:String,
    public email:String,
    public password:String,
    public customer_address:String){}


}


