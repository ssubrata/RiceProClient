import { Product } from "../../product/model/product";

export interface Stock{
    stockId:number;
    stockNo:string;
    unitPrice:number;
    quantity:number;
    stockInDate:string;
    productId:number;
    supplierId:number;
    product:Product
}