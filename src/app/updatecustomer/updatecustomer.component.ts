import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  abc: any;
  updateFormCustomer: FormGroup;

  get customer_name() {
      return this.updateFormCustomer.get('customer_name');
  }
  get customer_no() {
    return this.updateFormCustomer.get('customer_no');
  }
  get customer_contact() {
    return this.updateFormCustomer.get('customer_contact');
  }
  get email() {
    return this.updateFormCustomer.get('email');
  }
  get password() {
    return this.updateFormCustomer.get('password');
  }
  get confirmPassword() {
    return this.updateFormCustomer.get('confirmPassword');
  }
  get customer_address() {
    return this.updateFormCustomer.get('customer_address');
  }

  constructor(private _appservice: AppService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.updateFormCustomer = this.fb.group({
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
