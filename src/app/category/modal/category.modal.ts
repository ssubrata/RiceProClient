import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Category } from "../model/category";
import { CategoryService } from "../service/category.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'category-modal',
    templateUrl: '/category.modal.html'
})
export class CategoryModalComponent implements OnInit {

    modalConfig: any = {
        modalConfig: String,
    };
    updateButton: boolean = false;
    addButton: boolean = false;
    categoryForm: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<CategoryModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Category,
        private fb: FormBuilder,
        private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.categoryForm = this.fb.group({
            categoryId: 0,
            categoryName: '',
            description: ''
        })

        if (this.data) {
            this.categoryForm.controls['categoryId'].setValue(this.data.categoryId);
            this.categoryForm.controls['categoryName'].setValue(this.data.categoryName);
            this.categoryForm.controls['description'].setValue(this.data.description);

            this.modalConfig.header = "Categroy Edit Form";
            this.updateButton = true;
            this.addButton = false;

        } else {
            this.modalConfig.header = "Categroy Input Form";
            this.addButton = true;
            this.updateButton = false;
        }
    }

    onNoClick() {
        this.dialogRef.close();
    }

    addCategory() {
        this.categoryService.postCategory(this.categoryForm.value)
            .subscribe(data => {
                this.onNoClick();
            })
    }
    updateCategory() {
        this.categoryService.putCategory(this.categoryForm.value)
            .subscribe(data => {
                this.onNoClick();
            })
    }
}