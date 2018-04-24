import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    userId: string;
    user: User;
    username: string;
    email: string;
    message: string;
    successFlag = false;
    successMsg = 'Profile updated!';
    errorFlag = false;
    errorMsg = 'Update failed!';

    constructor(private userService: UserService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.username = params['username'];
            }
        );
        this.userService.checkLoggedIn().subscribe(
            response => {
                this.user = response;
                this.username = this.user.username;
                this.email = this.user.email;
            },
            err => {
                this.router.navigate(['/login']);
            }
        );
    }

    updateUser() {
        this.user.username = this.username;
        this.user.email = this.email;
        this.userService.updateUser(this.user._id, this.user).subscribe(
            response => {
                this.successFlag = true;
            },
            err => {
                this.errorFlag = true;
            }
        );
    }

    removeUser() {
        this.userService.deleteUser(this.user._id).subscribe();
        this.router.navigate(['/login']);
    }

    logout() {
        this.userService.logout().subscribe(
            res => this.router.navigate(['/login'])
        );
    }
}
