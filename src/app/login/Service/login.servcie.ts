import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private Url: string = environment.Url;

    constructor(private http: HttpClient) { }

    logIn(user: any): Observable<any> {

        let body = "username=" + user.userName + "&password=" + user.password + "&grant_type=password&scope=riceShopApi&client_id=riceShop01&client_secret=secret";
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded ');
        return this.http.post('https://localhost:5004/connect/token', body, { headers: headers })
    }
   
}
