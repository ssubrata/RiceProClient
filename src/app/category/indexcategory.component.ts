import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from './model/category';
import { MatTableDataSource, MatPaginator, MatDialog } from '../../../node_modules/@angular/material';
import { CategoryService } from './service/category.service';
import { CategoryModalComponent } from './modal/category.modal';
import { Router } from '../../../node_modules/@angular/router';
import { AuthenticationService } from '../Shared/serivce/authentication.service';
import { DeleteModalComponent } from '../Shared/modal/delete.modal';

@Component({
  selector: 'app-indexcategory',
  templateUrl: './indexcategory.component.html',
  styleUrls: ['./indexcategory.component.css']
})
export class IndexcategoryComponent implements OnInit {

  Categorys: Category[];
  displayedColumns: string[] = ['categoryId', 'categoryName', 'description', 'action'];
  dataSource = new MatTableDataSource<Category>(this.Categorys);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    public router: Router,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getCategory();
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getCategory() {
    debugger;
    this.categoryService.getCategorys().subscribe((data: any) => {
      this.Categorys = data;
      this.dataSource = new MatTableDataSource<Category>(this.Categorys);
      this.dataSource.paginator = this.paginator;
    })
  }
  openDialog(value: Category): void {
    debugger;
    const dialogRef = this.dialog.open(CategoryModalComponent, {
      width: '600px',
      height: '370px',
      data: value ? value : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was not from delete closed');
      this.getCategory();
    });
  }
  deleteDialog(value: Category) {
    debugger;
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px;',
      height: '200px',
      data: {
        id: value.categoryId,
        name: value.categoryName
      }
    });

    dialogRef.afterClosed().subscribe(id => {
      if (id) {
        this.deleteCategory(id);
      }
    });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(data => {
      this.getCategory();
    })
  }

}
