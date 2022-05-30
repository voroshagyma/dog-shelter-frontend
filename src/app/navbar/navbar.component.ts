import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../users/models/iuser';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly usersService: UsersService) { }

  ngOnInit(): void {
  }

  @Input()
  user?: IUser;

  logout() {
    this.usersService.logout();
  }

}
