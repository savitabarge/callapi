import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Iapi } from './api';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url:string="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"

  getdata():Observable<Iapi>{
    return this.http.get<Iapi>(this.url);
  }
}
