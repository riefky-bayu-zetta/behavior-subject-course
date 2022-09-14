import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  usersList: User[] = [];
  selectedUser: User | null = null;

  constructor(
    private UsersService: UsersService
  ) { }

  ngOnInit(): void {
    // Observe to users behaviourSubject, if there is changes, then it will update usersList also
    this.UsersService.users$.subscribe(users => {
      this.usersList = users;
    })
  }

  selectUser(user: User){
    this.UsersService.setSelectedUser(user);
  }

}
