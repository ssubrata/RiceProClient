import { Component, OnInit } from '@angular/core';
import { Sale } from './model/sale';
import { Order } from './model/order';



@Component({
  selector: 'app-sale',
  templateUrl: './indexsale.component.html',
  styleUrls: ['./indexsale.component.css']
})
export class IndexSaleComponent implements OnInit {


  subtotal:number=0;
  paymoney:number=0;
  sales: Sale[] = [];
  orders:Order[]=[];
  constructor() { }

  ngOnInit() {
  }


  subTotalCal(){
    this.subtotal=0;
   this.orders.forEach(element => {
      this.subtotal+=element.price*element.qty;
   }); 
   return this.subtotal;
 }
 refunOrPay(){
   return this.subTotalCal()-this.paymoney;
 }
  addOrder() {
    debugger;
    let item: Order = {
      id:0,
      productId:0,
      name:'Nme',
      price:0,
      qty:0,
    }
    this.orders.push(item);
    
  }
}
