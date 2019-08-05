import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-viewchef',
  templateUrl: './viewchef.component.html',
  styleUrls: ['./viewchef.component.css']
})
export class ViewchefComponent implements OnInit {
  public chefs=[];
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getChefs()
    .subscribe(data => this.chefs = data)
  }

}
