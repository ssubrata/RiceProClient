import { NgModule } from "../../node_modules/@angular/core";
import {
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatTreeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule
} from "../../node_modules/@angular/material";

@NgModule({
    imports: [

        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatListModule,
        MatTreeModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatGridListModule
    ],
     exports: [
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatListModule,
        MatTreeModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatGridListModule
    ]
})

export class MaterialModule {

}
