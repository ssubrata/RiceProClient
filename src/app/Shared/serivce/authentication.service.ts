import { Injectable } from "@angular/core";
import * as jwt_decode from "jwt-decode";
import { UserInfo } from "../model/userInfo.modal";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    decodeToken(token: string) {
        try {
            return jwt_decode(token);
        }
        catch (Error) {
            return null;
        }
    }
    isAuthenticate() {
        if (localStorage.getItem('access_token') != null) return true;
        else return false;
    }
    hasPermission(value: string): boolean {
        let isMatch = false;
        let decode = jwt_decode(localStorage.getItem('access_token'));
        let permission: string[] = decode.Permission;
        if (permission.indexOf(value) > -1) isMatch = true;
        return isMatch;
    }
    hasRole(value: string[]): boolean {

        let isMatch = false;
        let decode = jwt_decode(localStorage.getItem('access_token'));
        let role: string[] = decode.Role;
        if (role) {
            value.forEach(element => {
                if (role.indexOf(element) > -1) {
                    isMatch = true;
                }
            });
        }
        return isMatch;
    }
    userInfo(): string {
        let user: UserInfo = null;
        let decode = jwt_decode(localStorage.getItem('access_token'));

        return decode.Name;

    }
    isTokenExpired(token?: string): boolean {
        if (!token) token = localStorage.getItem('access_token');
        if (!token) return true;

        const date = this.getTokenExpirationDate();
        if (date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
    }
    getTokenExpirationDate(): Date {
        const decoded = jwt_decode(localStorage.getItem('access_token'));

        if (decoded.exp === undefined) return null;

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }
    canAdd(): boolean {
        return this.hasPermission('Add');
    }
    canRead(): boolean {
        return this.hasPermission('Read');
    }
    canEdit() {
        return this.hasPermission('Update');
    }
    canDelete() {
        return this.hasPermission('Delete');
    }
}
