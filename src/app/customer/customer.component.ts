import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  abc: any;
  signupFormCustomer: FormGroup;

  get customer_name() {
      return this.signupFormCustomer.get('customer_name');
  }
  get customer_no() {
    return this.signupFormCustomer.get('customer_no');
  }
  get customer_contact() {
    return this.signupFormCustomer.get('customer_contact');
  }
  get email() {
    return this.signupFormCustomer.get('email');
  }
  get password() {
    return this.signupFormCustomer.get('password');
  }
  get confirmPassword() {
    return this.signupFormCustomer.get('confirmPassword');
  }
  get customer_address() {
    return this.signupFormCustomer.get('customer_address');
  }

  constructor(private _appservice: AppService, private fb: FormBuilder) { }

  ngOnInit() {

    this.signupFormCustomer = this.fb.group({
      customer_name: ['', [Validators.required, Validators.minLength(3)]],
      customer_no: ['', [Validators.required, Validators.minLength(8)]],
      customer_contact: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      customer_address: ['', [Validators.required, Validators.minLength(15)]]

    }, {
      validator: this.MustMatch('password', 'confirmPassword')
  });

  }

  onSubmit() {
    console.log(this.signupFormCustomer.value);
    this.signupFormCustomer.controls.confirmPassword.disable();
    console.log(this.signupFormCustomer.value);
    this._appservice.signupCustomer(this.signupFormCustomer.value)
    .subscribe(
      response => console.log('success', response),
      error => console.log('error', error)
    );
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}
}
