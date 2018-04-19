import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../../../services/game.service.client';
import {Game} from '../../../models/game.model.client';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
    selector: 'app-game-new',
    templateUrl: './game-new.component.html',
    styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {
    user: User;
    username: string;
    game: Game = new Game(Math.floor(Math.random() * 100), this.user);
    constructor(private userService: UserService,
                private gameService: GameService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {}
    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.username = params['userId'];
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
    newGame() {
        // this.gameService.createGame(this.username, this.game).subscribe(
        //     res => this.router.navigate(['/user', this.username, '/game', this.game.id]),
        //     err => console.log('error add website')
        // );
        this.router.navigate(['/user', this.username, 'game', this.game.id]);
        // this.gameService.updateGame(this.game.id, this.game).subscribe(
        //     res => this.router.navigate(['/user', this.username, '/game', this.game.id]),
        //     err => console.log('error add website')
        // );
    }
}
