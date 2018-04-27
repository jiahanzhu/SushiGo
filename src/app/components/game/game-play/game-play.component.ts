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
    selector: 'app-game-play',
    templateUrl: './game-play.component.html',
    styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
    user: User;
    username: string;
    roomId: number;
    gameId: number;
    players: Player[];
    ranks = [];
    myPlayerId: number;
    game: any;
    showResults = 'none';
    // game: Game = new Game(Math.floor(Math.random() * 100), this.user);
    decks: number[][] = [[], [], [], []];
    myHand: number[];
    cards: number[][] = [[], [], [], []];
    scores: number[] = [];
    message: string;
    pudding: number[] = [];
    numbers = [];
    num: number;
    constructor(private userService: UserService,
                private playerService: PlayerService,
                private gameService: GameService,
                private roomService: RoomService,
                private cardService: CardService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.userService.checkLoggedIn().subscribe(
            response => {
                this.user = response;
                this.username = this.user.username;
                console.log('Username: ' + this.username);
                this.activatedRoute.params.subscribe(
                    (params: any) => {
                        this.myPlayerId = params['playerId'];
                        this.gameId = params['gameId'];
                        console.log('gameId');
                        console.log(this.gameId);
                        this.gameService.findGameById(this.gameId, this.myPlayerId).subscribe(res => {
                            this.game = res;
                            console.log('Entered new game: ');
                            console.log(this.game);
                            this.cards = this.game.cards;
                            // this.decks = this.game.decks;
                            this.myHand = this.game.hand;
                            this.num = this.game.num_players;
                            this.roomId = this.game.roomId;
                            this.playerService.findPlayersByRoomId(this.roomId).subscribe(res2 => {
                                this.players = res2;
                                this.players.sort((a, b) => a.playerId - b.playerId);
                                console.log('players in the game: ');
                                console.log(this.players);
                                for (let p of this.players) {
                                    if (p.username === this.username) {
                                        this.myPlayerId = p.playerId;
                                        console.log('my player id: ' + this.myPlayerId);
                                    }
                                }
                                // this.myHand = this.decks[this.myPlayerId];
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
    ngOnInit() {
        // this.socket = io();
        // this.socket.on('hello', function(data) {
        //     console.log('socket received greeting from server:');
        //     console.log(data);
        // });


    }


    showCards(index) {
        const cardType = this.getCardById(index);
        if (cardType === '...') {
            return ['...', index];
        } else {
            const src = '../../../../assets/img/cards/' + cardType + '.png';
            return [src, cardType];
        }
    }

    getNextHand(num) {
        const activity = {playerId: this.myPlayerId, card_index: num, game: this.game};
        console.log('getNextHand');
        console.log(activity);
        this.gameService.getNextHand(this.gameId, activity).subscribe(res => {
            this.game = res;
            // this.decks = this.game.decks;
            // this.myHand = this.decks[this.myPlayerId];
            this.myHand = this.game.hand;
            console.log('myHand: ');
            console.log(this.myHand);
            this.cards = this.game.cards;
            for (const i in this.players) {
                if (true) {
                    this.players[i].playedCards = this.cards[i];
                }
            }
            if (this.myHand.length === 0) {
                this.total(this.cards);
            }
        });
    }

    total(cards) {
        const maki: number[] = [],
            dumpling: number[] = [],
            tempura: number[] = [],
            sashimi: number[] = [],
            wasabi: number[] = [];
        for (let i = 0; i < this.players.length; i++) {
            console.log('Player number ' + i + this.players[i].username);
            maki[i] = 0;
            dumpling[i] = 0;
            tempura[i] = 0;
            sashimi[i] = 0;
            wasabi[i] = 0;
            this.pudding[i] = 0;
            let pts = 0;
            for (let j = 0; j < this.cards[0].length; j++) {
                const card = cards[i][j];
                const cardType = this.getCardById(card);
                switch (cardType) {
                    case 'Egg': {
                        let point = 1;
                        if (wasabi[i] > 0) {
                            point *= 3;
                            wasabi[i] -= 1;
                        }
                        pts += point;
                        break;
                    }
                    case 'Salmon': {
                        let point = 2;
                        if (wasabi[i] > 0) {
                            point *= 3;
                            wasabi[i] -= 1;
                        }
                        pts += point;
                        break;
                    }
                    case 'Squid': {
                        let point = 3;
                        if (wasabi[i] > 0) {
                            point *= 3;
                            wasabi[i] -= 1;
                        }
                        pts += point;
                        break;
                    }
                    case 'Maki_1': {
                        maki[i] += 1;
                        break;
                    }
                    case 'Maki_2': {
                        maki[i] += 2;
                        break;
                    }
                    case 'Maki_3': {
                        maki[i] += 3;
                        break;
                    }
                    case 'Tempura': {
                        tempura[i] += 1;
                        break;
                    }
                    case 'Sashimi': {
                        sashimi[i] += 1;
                        break;
                    }
                    case 'Dumpling': {
                        dumpling[i] += 1;
                        break;
                    }
                    case 'Chopsticks': {
                        break;
                    }
                    case 'Wasabi': {
                        wasabi[i] += 1;
                        break;
                    }
                    case 'Pudding': {
                        this.pudding[i] += 1;
                        break;
                    }
                    default: {
                        break;
                    }
                }

                console.log('Card: ' + cardType);
                console.log('Current score: ' + pts);
            }
            switch (dumpling[i]) {
                case 0:
                    break;
                case 1:
                    pts++;
                    break;
                case 2:
                    pts += 3;
                    break;
                case 3:
                    pts += 6;
                    break;
                case 4:
                    pts += 10;
                    break;
                default:
                    pts += 15;
            }
            console.log('Dumplings: ' + dumpling[i] + '   Current score: ' + pts);
            pts += Math.floor(tempura[i] / 2) * 5;
            console.log('Tempuras: ' + tempura[i] + '   Current score: ' + pts);
            pts += Math.floor(sashimi[i] / 3) * 10;
            console.log('Sashimis: ' + sashimi[i] + '   Current score: ' + pts);
            this.scores[i] = pts;
        }
        let maki1 = 0, maki2 = 0, puddingmax = 0, puddingmin = 10;
        for (let i = 0; i < this.players.length; i++) {
            const makis_num = maki[i], puddings_num = this.pudding[i];
            if (makis_num > maki1) {
                maki2 = maki1;
                maki1 = makis_num;
            } else if (makis_num > maki2 && makis_num < maki1) {
                maki2 = makis_num;
            }
            if (puddings_num > puddingmax) {
                puddingmax = puddings_num;
            }
            if (puddings_num < puddingmin) {
                puddingmin = puddings_num;
            }
        }
        for (let i = 0; i < this.players.length; i++) {
            if (maki[i] === maki1) {
                this.scores[i] += 6;
            }
            if (maki[i] === maki2) {
                this.scores[i] += 3;
            }
            if (this.pudding[i] === puddingmax) {
                this.scores[i] += 6;
            }
            if (this.pudding[i] === puddingmin) {
                this.scores[i] -= 6;
            }
            console.log('Maki: ' + maki[i]);
            console.log('Current score: ' + this.scores[i]);
            console.log('Pudding: ' + this.pudding[i]);
            console.log('Current score: ' + this.scores[i]);
            this.players[i].score = this.scores[i];
            this.ranks[i] = {player: i, username: this.players[i].username, score: this.scores[i]};
        }
        this.ranks.sort((a, b) => b.score - a.score);
        if (Math.max.apply(null, this.scores) === this.scores[this.myPlayerId]) {
            this.message = 'You win!';
        } else {
            this.message = 'You lose!';
        }
        this.showResults = 'block';
    }

    getCardById(index) {
        if (0 < index && index < 5) {
            return 'Egg';
        } else if (index < 15) {
            return 'Salmon';
        } else if (index < 20) {
            return 'Squid';
        } else if (index < 26) {
            return 'Maki_1';
        } else if (index < 38) {
            return 'Maki_2';
        } else if (index < 46) {
            return 'Maki_3';
        } else if (index < 60) {
            return 'Dumpling';
        } else if (index < 74) {
            return 'Tempura';
        } else if (index < 88) {
            return 'Sashimi';
        } else if (index < 94) {
            return 'Wasabi';
        } else if (index < 98) {
            return 'Chopsticks';
        } else if (index < 108) {
            return 'Pudding';
        } else {
            return '...';
        }
    }
    closeResults () {
        this.showResults = 'none';
    }

    startNewGame() {
        this.router.navigate(['/room', this.roomId]);
    }
}

