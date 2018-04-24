import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    userId: string;
    user: User;
    username: string;

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
            },
            err => {
                this.router.navigate(['/login']);
            }
        );
    }
    startGame() {
        this.router.navigate(['/user', this.username, 'game']);
    }

}

