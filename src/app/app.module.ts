import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule,MatTreeModule,MatIconModule,MatSidenavModule,MatListModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatCard, MatCardModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IndexSupplierComponent } from './supplier/indexsupplier.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from './auth/auth.interecptor';
import { DeleteModalComponent } from './Shared/modal/delete.modal';
import { PermissionDirective } from './Shared/directive/permission.directive';
import { MouseOverDirective } from './Shared/directive/mouseover.directive';
import { AuthGuardService } from './auth/authguardservice';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { SupplierModalComponent } from './supplier/modal/supplier.modal';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { IndexProductComponent } from './product/indexproduct.component';
import { IndexcategoryComponent } from './category/indexcategory.component';
import { CategoryModalComponent } from './category/modal/category.modal';
import { ProductModalComponent } from './product/modal/product.modal';
import { CategoryNamePipe } from './product/pipe/categoryName.pipe';
import { IndexstockComponent } from './stock/indexstock.component';
import { StockModalComponent } from './stock/modal/stock.modal';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSettingComponent } from './dashboard/userSetting/userSetting.component';
import { AuthenticateDirective } from './Shared/directive/authenitcate.directive';
import { IndexSaleComponent } from './sale/indexsale.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexSupplierComponent,
    LoginComponent,
    SupplierModalComponent,
    DeleteModalComponent,
    ForbidenComponent,
    IndexSaleComponent,
    IndexProductComponent,
    IndexcategoryComponent,
    CategoryModalComponent,
    PermissionDirective,
    ProductModalComponent,
    CategoryNamePipe,
    IndexstockComponent,
    StockModalComponent,
    MouseOverDirective,
    DashboardComponent,
    UserSettingComponent,
    AuthenticateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    AuthGuardService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  entryComponents:[
    ProductModalComponent,
    CategoryModalComponent,
    SupplierModalComponent,
    StockModalComponent,
    DeleteModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
