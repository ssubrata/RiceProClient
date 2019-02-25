import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { Product } from "../model/product";
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ProductService   {

    private Url: string = environment.Url;
    constructor(
        private http:HttpClient
    ) {
    }

    getProducts(){
        return this.http.get<Product>(this.Url+"/api/product");
    }
    postProduct(product:Product){
        return this.http.post(this.Url+"/api/product",product);
    }
    putProduct(product:Product){
        return this.http.put(this.Url+"/api/product/"+product.productId,product);
       
    }
    deleteProduct(id:number){
        return this.http.delete(this.Url+"/api/product/"+id);
    }
}