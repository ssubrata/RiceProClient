import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import 'rxjs/add/operator/do';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone())
        if (localStorage.getItem('access_token') != null ) {
            var token = localStorage.getItem('access_token');
            const cloneReq = req.clone(
                {
                    headers: req.headers.set("Authorization", "Bearer " + token)
                });

            return next.handle(cloneReq).do(
                succ => {
                    console.log("1");
                },
                err => {
                    if (err.status === 401)
                        this.router.navigateByUrl('/login')
                });
        }
        else {
            return next.handle(req.clone())
            //this.router.navigateByUrl('/login')
        }
    }
}