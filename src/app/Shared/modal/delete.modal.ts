import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";


@Component({
    selector: 'deletesupplier-modal',
    template: `

    <div mat-dialog-content>
       <p>Are you confirm?delete this {{data.name}}</p>
    </div>
    <div mat-dialog-actions>
        <button mat-raised-button color="primary" [mat-dialog-close]="data.id" >Confirm</button>
        <button mat-raised-button color="accent"   (click)="onNoClick()">No Thanks</button>
    </div>
    `,
    styleUrls: ['./delete.modal.css']
})
export class DeleteModalComponent   {

  
    id:number;
 
    constructor(
        public dialogRef: MatDialogRef<DeleteModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
      
    ) {
        console.log(data);
    }
    

    onNoClick(): void {
        this.dialogRef.close();
    }
    
}