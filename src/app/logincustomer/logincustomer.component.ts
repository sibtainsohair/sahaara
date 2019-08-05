import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincustomer',
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent implements OnInit {

  loginFormCustomer: FormGroup;

    
get email() {
  return this.loginFormCustomer.get('email');
}
get password() {
  return this.loginFormCustomer.get('password');
}
  constructor(private _appservice: AppService, private fb: FormBuilder,private router:Router) { }

  ngOnInit() {

    this.loginFormCustomer = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
   
    });

  }

  onSubmit() {
    console.log(this.loginFormCustomer.value);
    
    this._appservice.loginCustomer(this.loginFormCustomer.value)
    .subscribe(
      response => {
        localStorage.setItem('customername', response.customer_name)
        localStorage.setItem('customerid',response.customer_id)
        if(localStorage.getItem('customerid')!=null)
        {
          localStorage.setItem('loginstatus','true')
          localStorage.setItem('logintype','customer')
          this.router.navigate(['viewmenu'])

        }
      
      },
      error => console.log('error', error)
      
    );
  }
  

}
