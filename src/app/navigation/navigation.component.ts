import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loginstatus = false;
  logintypechef = false;

  constructor() { 
    this.loginstatus =  Boolean(localStorage.getItem('loginstatus'));
    if (localStorage.getItem('logintype')=='chef'){
      this.logintypechef = true;
    }
  }

  ngOnInit() {
  }

  onSubmit(){
    localStorage.clear();
    this.loginstatus = Boolean(localStorage.getItem('loginstatus'));
  }

}
