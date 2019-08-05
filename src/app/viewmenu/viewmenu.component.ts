import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.css']
})
export class ViewmenuComponent implements OnInit {
  public menus=[];
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getMenu()
        .subscribe(data => this.menus = data)
  }

}
