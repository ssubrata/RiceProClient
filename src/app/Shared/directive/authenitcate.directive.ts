import { Component, Directive, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthenticationService } from "../serivce/authentication.service";


@Directive({
    selector: '[isAuthenticate]'
})
export class AuthenticateDirective implements OnInit {

    constructor(
        private authService: AuthenticationService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    ) { }


    ngOnInit() {
        debugger;
        if (this.authService.isAuthenticate()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            return true;
        }
        else {
            this.viewContainer.clear();
            return false;
        }

    }
}