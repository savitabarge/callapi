import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent  implements OnInit {
  constructor(private _api:ApiService) { }
public apiData:any;
public DateTimeObj:any;

Object=Object;
  ngOnInit(): void {
    this._api.getdata().subscribe(data=>this.apiData=data)
  }
copyData(){
   this.DateTimeObj=this.apiData["Time Series (5min)"] 
  }
}


