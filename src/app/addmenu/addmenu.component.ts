import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  chefid = localStorage.getItem('chefid',);
  menuForm: FormGroup;

get shop_name() {
  return this.menuForm.get('shop_name');
}

constructor(private _appservice: AppService, private fb: FormBuilder,private router:Router) { }

ngOnInit() {

  this.menuForm = this.fb.group({
    shop_name: ['', [Validators.required, Validators.email]],
    chef_id: [this.chefid]
  });

}

onSubmit() {
  console.log(this.menuForm.value);

  this._appservice.addMenu(this.menuForm.value)
  .subscribe(
    response => {
      if (response.success !== '') {
        this.router.navigate(['addmenu']);
      }
    },
    error => console.log('error', error)
  );
}



      // set error on matchingControl if validation fails


}
