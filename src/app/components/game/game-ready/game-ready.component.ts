import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Player} from '../../../models/player.model.client';
import {Room} from '../../../models/room.model.client';
import {Game} from '../../../models/game.model.client';
import {UserService} from '../../../services/user.service.client';
import {PlayerService} from '../../../services/player.service.client';
import {RoomService} from '../../../services/room.service.client';
import {GameService} from '../../../services/game.service.client';
import {CardService} from '../../../services/card.service.client';
// import * as io from 'socket.io-client';
import {Card} from '../../../models/card.model.client';

@Component({
  selector: 'app-game-ready',
  templateUrl: './game-ready.component.html',
  styleUrls: ['./game-ready.component.css']
})
export class GameReadyComponent implements OnInit {
    user: User;
    username: string;
    roomId: string;
    room: Room;
    players: Player[];
    myPlayerId: number;
    game: any;
    // game: Game = new Game(Math.floor(Math.random() * 100), this.user);
    decks: number[][];
    hand: number[];
    cards: number[][];
    realCards = [];
    scores;
    message: string;
    socket;
    started = false;
    numbers = [];
    constructor(private userService: UserService,
                private playerService: PlayerService,
                private gameService: GameService,
                private roomService: RoomService,
                private cardService: CardService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {

        this.started = false;
    }
    ngOnInit() {
        // this.socket = io();
        // this.socket.on('hello', function(data) {
        //     console.log('socket received greeting from server:');
        //     console.log(data);
        // });
        this.userService.checkLoggedIn().subscribe(
            response => {
                this.user = response;
                this.username = this.user.username;
                console.log('Username: ' + this.username);
                this.activatedRoute.params.subscribe(
                    (params: any) => {
                        this.roomId = params['roomId'];
                        this.roomService.findRoomById(this.roomId).subscribe(res => {
                            this.room = res;
                            console.log('Entered new room:');
                            console.log(this.room);

                            this.playerService.findPlayersByRoomId(this.roomId).subscribe(res2 => {
                                console.log('players in the room:');
                                this.players = res2;
                                console.log(this.players);
                                for (let p of this.players) {
                                    if (p.username === this.username) {
                                        this.myPlayerId = p.playerId;
                                        console.log('my player id:');
                                        console.log(this.myPlayerId);
                                    }
                                }
                            });
                        });
                    }
                );
            },
            err => {
                this.router.navigate(['/login']);
            }
        );

    }

    startGame() {
        this.game = {
            id: 0, num_players: this.room.num_players,
            mode: this.room.mode, recipe: 1, round: 1,
            status: 'Playing', roomId: this.roomId
        };
        console.log('new game:');
        console.log(this.game);
        this.gameService.createGame(this.roomId, this.game).subscribe(res => {
            console.log('game started:');
            console.log(res);
            this.game = res;
            console.log('this.game:');
            console.log(this.game);
            this.decks = this.game.decks;
            this.hand = this.decks[this.decks.length - 1];
            this.scores = this.game.scores;

            console.log('decks:');
            console.log(this.decks);
            console.log('cards:');
            console.log(this.cards);
            this.router.navigate(['/game', String(this.game.id), 'player', String(this.myPlayerId)]);
        });
    }


}
