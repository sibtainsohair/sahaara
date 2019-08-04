import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  signup_customer_url = 'http://foodmaniafyp.herokuapp.com/customer';

  constructor(private http: HttpClient) { }

  public signupCustomer(signupCustomerDetail) {
    return this.http.post<any>(this.signup_customer_url, signupCustomerDetail);
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
