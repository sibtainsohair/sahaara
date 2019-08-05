import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginchef',
  templateUrl: './loginchef.component.html',
  styleUrls: ['./loginchef.component.css']
})
export class LoginchefComponent implements OnInit {

  loginFormChef: FormGroup;
  
get email() {
  return this.loginFormChef.get('email');
}
get password() {
  return this.loginFormChef.get('password');
}

constructor(
  private _appservice: AppService, 
  private fb: FormBuilder,
  private router:Router) {}

ngOnInit() {

  this.loginFormChef = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
 
  });

}

onSubmit() {
  console.log(this.loginFormChef.value);
  
  this._appservice.loginChef(this.loginFormChef.value)
  .subscribe(
    response => {
      localStorage.setItem('chefname', response.chef_name)
      localStorage.setItem('chefid',response.chef_id)
      if(localStorage.getItem('chefid')!=null)
      {
        localStorage.setItem('loginstatus','true')
          localStorage.setItem('logintype','chef')
        this.router.navigate(['viewmenu'])
      }
    
    },
    error => console.log('error', error)
    
  );
}



      // set error on matchingControl if validation fails
     
  
}
