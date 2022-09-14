import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  selectedUser: User | null = null;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // Observe to selecteduser behaviourSubject, if there is change, then it will update selectedUser
    this.usersService.selectedUser$.subscribe((user) => {
      this.selectedUser = user;
    });
  }
}
