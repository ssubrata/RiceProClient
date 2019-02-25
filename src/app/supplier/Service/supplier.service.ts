import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../model/supplier';



@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private Url: string = environment.Url;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');;
  constructor(private http: HttpClient) {

  }

  getSupplier() {
    return this.http.get<Supplier[]>(this.Url + '/api/supplier', {
      headers: this.headers
    });
  }

  postSupplier(value: Supplier) {
    debugger;
    return this.http.post(this.Url + '/api/supplier', value);
  }

  putSupplier(value: Supplier) {
    debugger;
    //const params = new HttpParams().append('id', value.supplierId.toString());
    return this.http.put(this.Url + '/api/supplier/' + value.supplierId, value, {
      headers: this.headers,

    });
  }

  deleteSupplier(id: number) {
    debugger;
    return this.http.delete(this.Url + '/api/supplier/' + id);
  }

}
