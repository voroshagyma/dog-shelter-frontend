import { Injectable } from '@angular/core';
import { IUser } from './models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  login(user: IUser) {

  }

  logout() { }

}
