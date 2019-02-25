import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Product } from "../model/product";
import { ProductService } from "../service/product.service";
import { CategoryService } from "../../category/service/category.service";
import { Category } from "../../category/model/category";

@Component({
    selector: 'product-modal',
    templateUrl: '/product.modal.html'
})
export class ProductModalComponent implements OnInit {

    modalConfig: any = {
        modalConfig: String,
    };
    updateButton: boolean = false;
    addButton: boolean = false;
    productForm: FormGroup;
    private selectedValue: number = 0;
    private categorys: Category[];
    constructor(
        public dialogRef: MatDialogRef<ProductModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Product,
        private fb: FormBuilder,
        private categorySerivce: CategoryService,
        private productService: ProductService) {
    }

    ngOnInit() {
     
        this.productForm = this.fb.group({
            productId: 0,
            productName: '',
            categoryId: '',
            description: ''
        })
        this.getCategory();
        if (this.data) {

            this.productForm.controls['categoryId'].setValue(this.data.categoryId);
            this.productForm.controls['productId'].setValue(this.data.productId);
            this.productForm.controls['productName'].setValue(this.data.productName);
            this.productForm.controls['description'].setValue(this.data.description);
            this.selectedValue=this.data.categoryId;
            this.modalConfig.header = "Product Edit Form";
            this.updateButton = true;
            this.addButton = false;

        } else {
            this.modalConfig.header = "Product Input Form";
            this.addButton = true;
            this.updateButton = false;
        }
      
    }

    onNoClick() {
        this.dialogRef.close();
    }

    addProduct() {

        this.productForm.controls['categoryId'].setValue(this.selectedValue);

        this.productService.postProduct(this.productForm.value)
            .subscribe(data => {
                this.onNoClick();
            })
    }
    updateProduct() {
        debugger;
        this.productService.putProduct(this.productForm.value)
            .subscribe(data => {
                this.onNoClick();
            })
    }
    getCategory() {
        this.categorySerivce.getCategorys()
            .subscribe((data: any) => {
                this.categorys = data;
            })
    }
}