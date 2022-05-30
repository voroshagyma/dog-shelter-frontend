import { Component } from '@angular/core';
import { IUser } from './users/models/iuser';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly usersService: UsersService) { }

  user: IUser | null = null;

  ngOnInit() {
    this.usersService.onUserChanged.subscribe(e => this.user = e);
  }

  handleLogout() {
    this.usersService.logout();
  }

}
