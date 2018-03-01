import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'qq')
  ];
  findUserByCredentials (username, password) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }
  findUserById (uid) {
    return this.users.find(function (user) {
      return user._id === uid;
    });
  }

}
