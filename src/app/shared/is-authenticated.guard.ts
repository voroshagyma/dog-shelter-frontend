import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private readonly usersService: UsersService, private readonly router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!!this.usersService.user) {
      return true;
    }
    else {
      return this.router.navigate(["/"]);
    }

  }

}
