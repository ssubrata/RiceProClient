import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Product } from './model/product';
import { ProductService } from './service/product.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Shared/serivce/authentication.service';
import { ProductModalComponent } from './modal/product.modal';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteModalComponent } from '../Shared/modal/delete.modal';

@Component({
  selector: 'app-product',
  templateUrl: './indexproduct.component.html',
  styleUrls: ['./indexproduct.component.css']
})
export class IndexProductComponent implements OnInit {

  Products: Product[];
  displayedColumns: string[] = ['productId', 'productName', 'description', 'categoryId', 'action'];
  dataSource = new MatTableDataSource<Product>(this.Products);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    public router: Router,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getProduct();
    this.dataSource.paginator = this.paginator;
  }
  openDialog(value: Product): void {
    debugger;
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '600px',
      height: '500px',
      data: value ? value : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was not from delete closed');
      this.getProduct();
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteDialog(value: Product) {
    debugger;
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px;',
      height: '200px',
      data: {
        id: value.productId,
        name: value.productName
      }
    });

    dialogRef.afterClosed().subscribe(id => {
      if (id) {
        this.deleteProduct(id)
      }

    });
  }
  getProduct() {
    debugger;
    this.productService.getProducts().subscribe((data: any) => {
      console.log(this.Products);
      this.Products = data;
      this.dataSource = new MatTableDataSource<Product>(this.Products);
      this.dataSource.paginator = this.paginator
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }
  deleteProduct(id: number) {
    debugger;
    this.productService.deleteProduct(id).subscribe(data => {
      this.getProduct();
    })
  }


}
