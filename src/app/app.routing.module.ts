import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../node_modules/@angular/router";
import { IndexSupplierComponent } from "./supplier/indexsupplier.component";
import { AuthGuardService } from "./auth/authguardservice";
import { LoginComponent } from "./login/login.component";
import { ForbidenComponent } from "./forbiden/forbiden.component";
import { IndexSaleComponent } from "./sale/indexsale.component";
import { IndexProductComponent } from "./product/indexproduct.component";
import { IndexcategoryComponent } from "./category/indexcategory.component";
import { IndexstockComponent } from "./stock/indexstock.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserSettingComponent } from "./dashboard/userSetting/userSetting.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'supplier', component: IndexSupplierComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Manager'] } },
    { path: 'login', component: LoginComponent },
    { path: 'product', component: IndexProductComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Manager'] } },
    { path: 'forbiden', component: ForbidenComponent },
    { path: 'sale', component: IndexSaleComponent },
    { path: 'category', component: IndexcategoryComponent, canActivate: [AuthGuardService], data: { roles: ['Admin', 'Manager'] } },
    { path: 'stock', component: IndexstockComponent, canActivate: [AuthGuardService], data: { roles: ['Admin'] } },
    {
        path: 'dashboard', component: DashboardComponent,
        children:[
            {path:'userSetting',component:UserSettingComponent}
        ]
        

    },
    { path: '*', component: LoginComponent },

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
    , exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}