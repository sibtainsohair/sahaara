import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  abc: any;
  signupFormChef: FormGroup;
  get chef_name() {
    return this.signupFormChef.get('chef_name');
}

get chef_contact() {
  return this.signupFormChef.get('chef_contact');
}
get email() {
  return this.signupFormChef.get('email');
}
get password() {
  return this.signupFormChef.get('password');
}
get confirmPassword() {
  return this.signupFormChef.get('confirmPassword');
}
get chef_address() {
  return this.signupFormChef.get('chef_address');
}

constructor(private _appservice: AppService, private fb: FormBuilder,private router: Router) { }

ngOnInit() {

  this.signupFormChef = this.fb.group({
    chef_name: ['', [Validators.required, Validators.minLength(3)]],
    chef_no: ['', [Validators.required, Validators.minLength(8)]],
    chef_contact: ['', [Validators.required, Validators.minLength(11)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
    chef_address: ['', [Validators.required, Validators.minLength(15)]]

  }, {
    validator: this.MustMatch('password', 'confirmPassword')
});

}

onSubmit() {
  console.log(this.signupFormChef.value);
  this.signupFormChef.controls.confirmPassword.disable();
  console.log(this.signupFormChef.value);
  this._appservice.signupChef(this.signupFormChef.value)
  .subscribe(
    response => {
      if (response.success !== '') {
        this.router.navigate(['loginchef']);
      }
    },
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
