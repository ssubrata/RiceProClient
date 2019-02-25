import { Component, OnInit, ViewChild } from '@angular/core';
import { StockService } from './service/stock.service.service';
import { Stock } from './model/Stock';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Shared/serivce/authentication.service';
import { StockModalComponent } from './modal/stock.modal';
import { DeleteModalComponent } from '../Shared/modal/delete.modal';

@Component({
  selector: 'app-indexstock',
  templateUrl: './indexstock.component.html',
  styleUrls: ['./indexstock.component.css']
})
export class IndexstockComponent implements OnInit {

  stocks:Stock[];
  displayedColumns: string[] = ['stockId', 'stockNo', 'quantity','unitPrice', 'stockInDate','productId', 'action'];
  dataSource = new MatTableDataSource<Stock>(this.stocks);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private stockService:StockService,
    public dialog: MatDialog,
    public router: Router,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getStock();
    this.dataSource.paginator = this.paginator;
  }
  openDialog(value: Stock): void {
    debugger;
    const dialogRef = this.dialog.open(StockModalComponent, {
      width: '600px',
      height: '500px',
      data: value ? value : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was not from delete closed');
      this.getStock();
    });
  }
  deleteDialog(value: Stock) {
    debugger;
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px;',
      height: '200px',
      data: {
        id: value.stockId,
        name: value.product.productName+" with Stock In"+value.quantity
      }
    });

    dialogRef.afterClosed().subscribe(id => {
      if (id) {
        this.deleteStock(id)
      }

    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getStock(){
    this.stockService.getStock()
    .subscribe((data:any)=>{
      this.stocks=data;
      this.dataSource = new MatTableDataSource<Stock>(this.stocks);
      this.dataSource.paginator = this.paginator
    })
  }
  deleteStock(id: number) {
    debugger;
    this.stockService.deleteStock(id).subscribe(data => {
      this.getStock();
    })
  }
}
