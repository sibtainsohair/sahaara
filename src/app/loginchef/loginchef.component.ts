import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-loginchef',
  templateUrl: './loginchef.component.html',
  styleUrls: ['./loginchef.component.css']
})
export class LoginchefComponent implements OnInit {

  abc: any;
  loginFormChef: FormGroup;
  
get email() {
  return this.loginFormChef.get('email');
}
get password() {
  return this.loginFormChef.get('password');
}

constructor(private _appservice: AppService, private fb: FormBuilder) { }

ngOnInit() {

  this.loginFormChef = this.fb.group({
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
  console.log(this.loginFormChef.value);
  this.loginFormChef.controls.confirmPassword.disable();
  console.log(this.loginFormChef.value);
  this._appservice.loginChef(this.loginFormChef.value)
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
