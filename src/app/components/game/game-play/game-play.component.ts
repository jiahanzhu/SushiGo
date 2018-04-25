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
    roomId: string;
    gameId: number;
    players: Player[];
    myPlayerId: number;
    game: any;
    // game: Game = new Game(Math.floor(Math.random() * 100), this.user);
    decks: number[][] = [[], [], [], []];
    hand: number[];
    cards: number[][] = [[], [], [], []];
    realCards = [];
    scores;
    message: string;
    socket;
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
                        this.gameId = params['gameId'];
                        console.log('gameId');
                        console.log(this.gameId);
                        this.gameService.findGameById(this.gameId).subscribe(res => {
                            this.game = res;
                            console.log('Entered new game:');
                            console.log(this.game);
                            this.cards = this.game.cards;
                            this.decks = this.game.decks;
                            this.num = this.game.num_players;
                            console.log('cards:');
                            console.log(this.cards);
                            for (let i = 0; i < this.game.num_players; ++i) {
                                this.numbers.push(i);
                            }
                            console.log('numbers[]:');
                            console.log(this.numbers);
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
        if (0 < index && index < 5) {
            return ['../../../../assets/img/cards/Egg.png', 'Egg'];
        } else if (index < 15) {
            return ['../../../../assets/img/cards/Salmon.png', 'Salmon'];
        } else if (index < 20) {
            return ['../../../../assets/img/cards/Squid.png', 'Squid'];
        } else if (index < 26) {
            return ['../../../../assets/img/cards/Maki_1.png', 'Maki I'];
        } else if (index < 38) {
            return ['../../../../assets/img/cards/Maki_2.png', 'Maki II'];
        } else if (index < 46) {
            return ['../../../../assets/img/cards/Maki_3.png', 'Maki III'];
        } else if (index < 60) {
            return ['../../../../assets/img/cards/Dumpling.png', 'Dumpling'];
        } else if (index < 74) {
            return ['../../../../assets/img/cards/Tempura.png', 'Tempura'];
        } else if (index < 88) {
            return ['../../../../assets/img/cards/Sashimi.png', 'Sashimi'];
        } else if (index < 94) {
            return ['../../../../assets/img/cards/Wasabi.png', 'Wasabi'];
        } else if (index < 98) {
            return ['../../../../assets/img/cards/Chopsticks.png', 'Chopsticks'];
        } else if (index < 108) {
            return ['../../../../assets/img/cards/Pudding.png', 'Pudding'];
        } else {
            return ['...', index];
        }
    }

    // showCards(index) {
    //     if (0 < index && index < 5) {
    //         return '../../../../assets/img/cards/Egg.png';
    //     } else if (index < 15) {
    //         return '../../../../assets/img/cards/Salmon.png';
    //     } else if (index < 20) {
    //         return '../../../../assets/img/cards/Squid.png';
    //     } else if (index < 26) {
    //         return '../../../../assets/img/cards/Maki_1.png';
    //     } else if (index < 38) {
    //         return '../../../../assets/img/cards/Maki_2.png';
    //     } else if (index < 46) {
    //         return '../../../../assets/img/cards/Maki_3.png';
    //     } else if (index < 60) {
    //         return '../../../../assets/img/cards/Dumpling.png';
    //     } else if (index < 74) {
    //         return '../../../../assets/img/cards/Tempura.png';
    //     } else if (index < 88) {
    //         return '../../../../assets/img/cards/Sashimi.png';
    //     } else if (index < 94) {
    //         return '../../../../assets/img/cards/Wasabi.png';
    //     } else if (index < 98) {
    //         return '../../../../assets/img/cards/Chopsticks.png';
    //     } else if (index < 108) {
    //         return '../../../../assets/img/cards/Pudding.png';
    //     } else {
    //         return '...';
    //     }
    // }

    getNextHand(num) {
        const activity = {playerId: this.myPlayerId, card_index: num, game: this.game};
        this.gameService.getNextHand(this.gameId, activity).subscribe(res => {
            this.game = res;
            this.decks = this.game.decks;
            this.hand = this.decks[this.decks.length - 1];
            this.cards = this.game.cards;
        });
    }

    total(cards) {
        for (let i = 0; i < 4; i++) {
            let pts = 0;
            for (let j = 0; j < 8; j++) {
                const card = cards[i][j];
                if (card < 5) {
                    pts++;
                } else if (card < 15) {
                    pts += 2;
                } else if (card < 20) {
                    pts += 3;
                } else if (card < 26) {
                    this.game.maki[i]++;
                } else if (card < 38) {
                    this.game.maki[i] += 2;
                } else if (card < 46) {
                    this.game.maki[i] += 3;
                } else if (card < 60) {
                    this.game.dumpling[i]++;
                } else if (card < 74) {
                    this.game.tempura[i]++;
                } else if (card < 88) {
                    this.game.sashimi[i]++;
                } else if (card < 94) {
                    pts += 2;
                } else if (card < 98) {
                    continue;
                } else if (card < 108) {
                    this.game.pudding[i]++;
                } else {
                    continue;
                }

                console.log('Card: ' + card);
                console.log('Current score: ' + pts);
            }
            switch (this.game.dumpling[i]) {
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

            console.log('Dumplings: ' + this.game.dumpling[i]);
            console.log('Current score: ' + pts);
            if (this.game.tempura[i] === 2) {
                pts += 5;
            }
            console.log('Tempuras: ' + this.game.tempura[i]);
            console.log('Current score: ' + pts);
            if (this.game.sashimi[i] === 3) {
                pts += 10;
            }
            console.log('Sashimis: ' + this.game.sashimi[i]);
            console.log('Current score: ' + pts);
            this.game.scores[i] = pts;
        }
        let maki1 = 0, maki2 = 0, puddingmax = 0, puddingmin = 10;
        for (let i = 0; i < 4; i++) {
            const maki = this.game.maki[i], pudding = this.game.pudding[i];
            if (maki > maki1) {
                maki2 = maki1;
                maki1 = maki;
            } else if (maki > maki2 && maki < maki1) {
                maki2 = maki;
            }
            if (pudding > puddingmax) {
                puddingmax = pudding;
            }
            if (pudding < puddingmin) {
                puddingmin = pudding;
            }
        }
        for (let i = 0; i < 4; i++) {
            if (this.game.maki[i] === maki1) {
                this.game.scores[i] += 6;
            }
            if (this.game.maki[i] === maki2) {
                this.game.scores[i] += 3;
            }
            if (this.game.pudding[i] === puddingmax) {
                this.game.scores[i] += 6;
            }
            if (this.game.pudding[i] === puddingmin) {
                this.game.scores[i] -= 6;
            }
            console.log('Maki: ' + this.game.maki[i]);
            console.log('Current score: ' + this.game.scores[i]);
            console.log('Pudding: ' + this.game.pudding[i]);
            console.log('Current score: ' + this.game.scores[i]);
        }
        if (Math.max.apply(null, this.game.scores) === this.game.scores[3]) {
            this.message = 'You win!';
        } else {
            this.message = 'You lose!';
        }
    }
}
