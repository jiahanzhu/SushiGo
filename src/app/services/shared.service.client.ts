import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// injecting service into module
@Injectable()

export class SharedService {
    constructor(private http: HttpClient) {
    }
    username = '';
    api = {
        'addUser': this.addUser,
        'getUser': this.getUser,
        'deleteUser': this.deleteUser
    };

    addUser(username) {
        this.username = username;
        return this.username;
    }
    getUser() {
        return this.username;
    }
    deleteUser() {
        this.username = '';
        return true;
    }
}
