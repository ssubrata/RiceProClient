import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Stock } from '../model/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService implements OnInit {

  baseUrl: string = environment.Url;
  constructor(private http: HttpClient) { }
  ngOnInit() {

  }

  getStock(): Observable<Stock> {
    return this.http.get<Stock>(this.baseUrl + "/api/stock");
  }
  postStock(val: Stock) {
    return this.http.post(this.baseUrl + "/api/stock", val);
  }
  putStock(val: Stock) {
    return this.http.put(this.baseUrl + "/api/stock/" + val.stockId, val);
  }
  deleteStock(id: number) {
    return this.http.delete(this.baseUrl + "/api/stock/" + id);
  }
}
