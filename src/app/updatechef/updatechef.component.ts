import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatechef',
  templateUrl: './updatechef.component.html',
  styleUrls: ['./updatechef.component.css']
})
export class UpdatechefComponent implements OnInit {

  abc: any;
  updateFormChef: FormGroup;

  get customer_name() {
      return this.updateFormChef.get('customer_name');
  }
  get customer_no() {
    return this.updateFormChef.get('customer_no');
  }
  get customer_contact() {
    return this.updateFormChef.get('customer_contact');
  }
  get email() {
    return this.updateFormChef.get('email');
  }
  get password() {
    return this.updateFormChef.get('password');
  }
  get confirmPassword() {
    return this.updateFormChef.get('confirmPassword');
  }
  get customer_address() {
    return this.updateFormChef.get('customer_address');
  }

  constructor(private _appservice: AppService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.updateFormChef = this.fb.group({
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
