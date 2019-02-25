import { AuthenticationService } from "../Shared/serivce/authentication.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public auth: AuthenticationService,
    public router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    debugger;

    if (this.auth.isAuthenticate()) {
      let roles = next.data["roles"] as Array<string>;
      var match = this.auth.hasRole(roles);
      if (match) {
        return true;
      }
      else {
        this.router.navigate(['/forbiden']);
        return false;
      }
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}