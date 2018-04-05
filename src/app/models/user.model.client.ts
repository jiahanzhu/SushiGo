export class User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
