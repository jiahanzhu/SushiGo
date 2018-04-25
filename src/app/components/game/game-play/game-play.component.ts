import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../../../services/game.service.client';
import {Game} from '../../../models/game.model.client';
import {Player} from '../../../models/player.model.client';
import {UserService} from '../../../services/user.service.client';
import {Room} from '../../../models/room.model.client';
import {RoomService} from '../../../services/room.service.client';
import * as io from 'socket.io-client';
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
    room: Room;
    players: Player[];
    game: Game = new Game(Math.floor(Math.random() * 100), this.user);
    decks = this.game.decks;
    cards = this.game.cards;
    points = this.game.points;
    message: string;
    socket;
    constructor(private userService: UserService,
                private gameService: GameService,
                private roomService: RoomService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
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
    ngOnInit() {
        this.socket = io();
        this.socket.on('hello', function(data) {
            console.log('socket received greeting from server:');
            console.log(data);
        });
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.roomId = params['roomId'];
                this.roomService.findRoomById(this.roomId).subscribe(res => {
                    this.room = res;
                    console.log('Entered new room:');
                    console.log(this.room);
                });
            }
        );

    }

    showCards(index) {
        if (index < 5) {
            return ['../../../../assets/img/cards/sushigo_egg.png', 'Egg'];
        } else if (index < 15) {
            return ['../../../../assets/img/cards/sushigo_salmon.png', 'Salmon'];
        } else if (index < 20) {
            return ['../../../../assets/img/cards/sushigo_squid.png', 'Squid'];
        } else if (index < 26) {
            return ['../../../../assets/img/cards/sushigo_maki_1.png', 'Maki I'];
        } else if (index < 38) {
            return ['../../../../assets/img/cards/sushigo_maki_2.png', 'Maki II'];
        } else if (index < 46) {
            return ['../../../../assets/img/cards/sushigo_maki_3.png', 'Maki III'];
        } else if (index < 60) {
            return ['../../../../assets/img/cards/sushigo_dumpling.png', 'Dumpling'];
        } else if (index < 74) {
            return ['../../../../assets/img/cards/sushigo_tempura.png', 'Tempura'];
        } else if (index < 88) {
            return ['../../../../assets/img/cards/sushigo_sashimi.png', 'Sashimi'];
        } else if (index < 94) {
            return ['../../../../assets/img/cards/sushigo_wasabi.png', 'Wasabi'];
        } else if (index < 98) {
            return ['../../../../assets/img/cards/sushigo_chopsticks.png', 'Chopsticks'];
        } else if (index < 108) {
            return ['../../../../assets/img/cards/sushigo_pudding.png', 'Pudding'];
        } else {
            return ['...', index];
        }
    }

    getCard(num) {
        let card = this.decks[0].shift();
        this.cards[0].push(card);
        card = this.decks[1].shift();
        this.cards[1].push(card);
        card = this.decks[2].shift();
        this.cards[2].push(card);
        const index = this.decks[3].findIndex(function(element) {
            return element = num;
        });
        this.decks[3].splice(index, 1);
        this.cards[3].push(num);
        const temp = this.decks[3];
        this.decks[3] = this.decks[2];
        this.decks[2] = this.decks[1];
        this.decks[1] = this.decks[0];
        this.decks[0] = temp;
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
            this.game.points[i] = pts;
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
                this.game.points[i] += 6;
            }
            if (this.game.maki[i] === maki2) {
                this.game.points[i] += 3;
            }
            if (this.game.pudding[i] === puddingmax) {
                this.game.points[i] += 6;
            }
            if (this.game.pudding[i] === puddingmin) {
                this.game.points[i] -= 6;
            }
            console.log('Maki: ' + this.game.maki[i]);
            console.log('Current score: ' + this.game.points[i]);
            console.log('Pudding: ' + this.game.pudding[i]);
            console.log('Current score: ' + this.game.points[i]);
        }
        if (Math.max.apply(null, this.game.points) === this.game.points[3]) {
            this.message = 'You win!';
        } else {
            this.message = 'You lose!';
        }
    }
}
