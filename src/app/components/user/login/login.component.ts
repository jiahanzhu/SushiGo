import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // properties
  username: string;
  password: string;
  user: User;

  constructor(private userService: UserService, private sharedService: SharedService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe(
        response => {
          this.user = response;
          this.router.navigate(['/user', this.username]);
        },
        err => {
          alert('Invalid Password!');
        });
      const added = this.sharedService.addUser(this.username);
  }
}
