import { Component, OnInit, ViewChild } from '@angular/core';
import { SupplierService } from './Service/supplier.service';
import { Observable } from 'rxjs';
import { Supplier } from './model/supplier';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteModalComponent } from '../Shared/modal/delete.modal';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Shared/serivce/authentication.service';
import { SupplierModalComponent } from './modal/supplier.modal';


@Component({
  selector: 'app-supplier',
  templateUrl: './indexsupplier.component.html',
  styleUrls: ['./indexsupplier.component.css']
})
export class IndexSupplierComponent implements OnInit {

  Suplliers: Supplier[];
  displayedColumns: string[] = ['supplierId', 'ownerName', 'companyName', 'address', 'contact', 'action'];
  dataSource = new MatTableDataSource<Supplier>(this.Suplliers);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private supplierService: SupplierService,
    public dialog: MatDialog,
    public router: Router,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getSupplier();
    this.dataSource.paginator = this.paginator;
  }
  openDialog(value: Supplier): void {
    debugger;
    const dialogRef = this.dialog.open(SupplierModalComponent, {
      width: '600px',
      height: '500px',
      data: value ? value : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was not from delete closed');
      this.getSupplier();
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteDialog(value: Supplier) {
    debugger;
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px;',
      height: '200px',
      data: {
        id: value.supplierId,
        name: value.companyName
      }
    });

    dialogRef.afterClosed().subscribe(id => {
      if (id) {
        this.deleteSupplier(id)
      }

    });
  }
  getSupplier() {
    debugger;
    this.supplierService.getSupplier().subscribe((data: any) => {
      console.log(this.Suplliers);
      this.Suplliers = data;
      this.dataSource = new MatTableDataSource<Supplier>(this.Suplliers);
      this.dataSource.paginator = this.paginator
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }
    deleteSupplier(id:number){
        debugger;
        this.supplierService.deleteSupplier(id).subscribe(data=>{
            this.getSupplier();
        })
    }

}
