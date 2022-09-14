import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  selectedUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  selectedUser$ = this.selectedUser.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.dummyInitList();
  }

  dummyInitList() {
    this.fetchUserJson().subscribe(resp => {
      let usersData = resp.users;
      this.setAllUsersLists(usersData);
    })
  }

  fetchUserJson() {
    return this.httpClient.get<any>('assets/json/users.json');
  }

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

  setSelectedUser(data: User) {
    this.selectedUser.next(data);
  }

  resetSelectedUser() {
    this.selectedUser.next(null);
  }
}
