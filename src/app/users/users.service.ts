import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  constructor() { }

  setAllUsersLists(data: User[]) {
    this.users.next(data);
  }

  addUserToList(data: User) {
    let tempUsers = this.getValuetAllStudentsLists();
    tempUsers.push(data);
    this.setAllUsersLists(tempUsers);
  }

  resetAllStudentsLists() {
    this.users.next([]);
  }

  getValuetAllStudentsLists(): User[] {
    return this.users.getValue();
  }

}
