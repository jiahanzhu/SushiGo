import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../../../services/game.service.client';
import {Game} from '../../../models/game.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css']
})
export class GameStatsComponent implements OnInit {
    user: User;
    username: string;
    gameId: string;
    game: Game;
    cards: number[][];
    points: number[];
    message: string;
    constructor(private userService: UserService,
                private gameService: GameService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(
          (params: any) => {
              this.username = params['userId'];
              this.gameId = params['gameId'];
          }
      );
      this.userService.checkLoggedIn().subscribe(
          response => {
              this.user = response;
          },
          err => {
              this.router.navigate(['/login']);
          }
      );
      this.gameService.findGameById(this.gameId).subscribe(
          response => {
            this.game = response;
            this.cards = this.game.cards;
            this.points = this.game.points;
          },
          err => {
            this.router.navigate(['/login']);
          }
      );
      if (Math.max.apply(null, this.points) === this.points[3]) {
          this.message = 'You win!';
      } else {
          this.message = 'You lose!';
      }
  }
}
