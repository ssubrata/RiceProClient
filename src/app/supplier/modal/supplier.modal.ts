import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SelectionModel } from "@angular/cdk/collections";
import { SupplierService } from "../Service/supplier.service";
import { Supplier } from "../model/supplier";


@Component({
    selector: 'supplier-modal',
    templateUrl: './supplier.modal.html',
    styleUrls:[]
})
export class SupplierModalComponent implements OnInit {

    modalConfig: any = {
        modalConfig: String,
    };
    updateButton: boolean = false;
    addButton: boolean = false;
    supllierForm: FormGroup;
 
    constructor(
        public dialogRef: MatDialogRef<SupplierModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Supplier,
        private fb: FormBuilder,
        private supplierService:SupplierService
    ) {
        console.log(data);
    }
    ngOnInit() {

        this.supllierForm = this.fb.group({
            supplierId:0,
            ownerName: '',
            companyName: '',
            address: '',
            contactName: ''
        });

    

        if (this.data) {

            this.supllierForm.controls["supplierId"].setValue(this.data.supplierId);
            this.supllierForm.controls["ownerName"].setValue(this.data.ownerName);
            this.supllierForm.controls["companyName"].setValue(this.data.companyName);
            this.supllierForm.controls["address"].setValue(this.data.address);
            this.supllierForm.controls["contactName"].setValue(this.data.contactName);

            this.modalConfig.header = "Supplier Edit Form";
            this.updateButton = true;
            this.addButton = false;

        } else {
            this.modalConfig.header = "Supplier Input Form";
            this.addButton = true;
            this.updateButton = false;
        }
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    addSupplier(){
        debugger;
        this.supplierService.postSupplier(this.supllierForm.value).subscribe(data=>{
            this.onNoClick();
        })
    }
    updateSupplier(){
        debugger;
        this.supplierService.putSupplier(this.supllierForm.value).subscribe(data=>{
            this.onNoClick();
            
        })
    }
 
}