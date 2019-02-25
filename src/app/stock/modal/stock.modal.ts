
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import { StockService } from "../service/stock.service.service";
import { Stock } from "../model/Stock";
import { Product } from "../../product/model/product";
import { ProductService } from "../../product/service/product.service";
import { SupplierService } from "../../supplier/Service/supplier.service";
import { Supplier } from "../../supplier/model/supplier";



@Component({
    selector: 'stock-modal',
    templateUrl: '/stock.modal.html'
})
export class StockModalComponent implements OnInit {

    modalConfig: any = {
        modalConfig: String,
    };
    updateButton: boolean = false;
    addButton: boolean = false;
    stockForm: FormGroup;
    private selectedValue: number = 0;
    private selectedSupplierValue: number = 0;
    private stocks: Stock[];
    private products: Product[];
    private suppliers: Supplier[];
    constructor(
        public dialogRef: MatDialogRef<StockModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Stock,
        private fb: FormBuilder,
        private stockService: StockService,
        public supplierService: SupplierService,
        private productService: ProductService) {
    }

    ngOnInit() {

        this.stockForm = this.fb.group({
            stockId: 0,
            stockNo: '',
            quantity: '',
            unitPrice: '',
            productId: '',
            supplierId:'',
            stockInDate: ''
        })
        this.getProduct();
        this.getSupplier();
        if (this.data) {
            debugger;
            this.stockForm.controls['stockId'].setValue(this.data.stockId);
            // this.stockForm.controls['stockId'].setValue(this.data.productId);
            this.stockForm.controls['stockNo'].setValue(this.data.stockNo);
            this.stockForm.controls['quantity'].setValue(this.data.quantity);
            this.stockForm.controls['unitPrice'].setValue(this.data.unitPrice);
            this.stockForm.controls['stockInDate'].setValue(this.data.stockInDate);
            this.selectedValue = this.data.productId;
            this.selectedSupplierValue=this.data.supplierId;
            this.modalConfig.header = "Stock Edit Form";
            this.updateButton = true;
            this.addButton = false;

        } else {
            this.modalConfig.header = "Stock Input Form";
            this.addButton = true;
            this.updateButton = false;
        }

    }

    onNoClick() {
        this.dialogRef.close();
    }

    addStock() {

        //    this.stockForm.controls['categoryId'].setValue(this.selectedValue);

        this.stockService.postStock(this.stockForm.value)
            .subscribe(data => {
                this.onNoClick();
            })
    }
    updateStock() {
        debugger;
        this.stockService.putStock(this.stockForm.value)
            .subscribe(data => {
                this.onNoClick();
            })
    }
    getProduct() {
        this.productService.getProducts()
            .subscribe((data: any) => {
                this.products = data;
            })
    }
    getSupplier() {
        this.supplierService.getSupplier()
            .subscribe(data => {
                debugger;
                this.suppliers = data;
            })
    }
}