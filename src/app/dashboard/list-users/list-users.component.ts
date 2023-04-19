import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  listUsers: any[] = [];

  constructor(private _userService: UserService) {
    this.getUsers();
  }

  public getUsers() {
    this._userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.listUsers = data;
        console.log(this.listUsers);
      },
    });
  }
}
