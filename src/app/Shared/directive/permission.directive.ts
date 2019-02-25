import { Directive, OnInit, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthenticationService } from '../serivce/authentication.service';
@Directive({
    selector: '[hasPermission]'
})
export class PermissionDirective implements OnInit {

    private _permission: string;
    @Input() set hasPermission(val: string) {

        this._permission = val;
    }
    constructor(
        private authService: AuthenticationService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    ) {

    }

    ngOnInit() {
        debugger;
        if (this.cheakPermission()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            return true;
        }
        else {
            this.viewContainer.clear();
            return false;
        }

        //  this.viewContainer.createEmbeddedView(this.templateRef);
        //  else this.viewContainer.clear();
    }

    cheakPermission(): boolean {
        debugger;
        switch (this._permission) {
            case "Add": {
                return this.authService.canAdd();

            }
            case "Read": {
                return this.authService.canRead();

            }
            case "Update": {
                return this.authService.canEdit();

            }
            case "Delete": {
                return this.authService.canDelete();

            }
            default:
                return false;

        }
    }
}