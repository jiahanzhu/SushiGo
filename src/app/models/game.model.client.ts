import {Card} from './card.model.client';
import {Player} from './player.model.client';
import {Room} from './room.model.client';
import {assertNumber} from '@angular/core/src/render3/assert';

export class Game {
    // id: string;
    // user: User;
    // decks: number[][]; // original switched deck of cards
    // cards: number[][]; // users' final deck of cards
    // points: number[]; // users' final points
    // maki: number[]; // users' numbers of maki cards
    // dumpling: number[]; // users' numbers of dumpling cards
    // tempura: number[]; // users' numbers of tempura cards
    // sashimi: number[]; // users' numbers of sashimi cards
    // pudding: number[]; // users' numbers of pudding cards
    //
    // constructor(id, user) {
    //     this.id = id;
    //     this.user = user;
    //     this.decks = [];
    //     const set = new Set();
    //     for (let i = 0; i < 4; i++) {
    //         this.decks[i] = [];
    //         for (let j = 0; j < 8; j++) {
    //             let card;
    //             do {
    //                 card = Math.floor(Math.random() * 108);
    //             } while (set.has(card));
    //             this.decks[i][j] = card;
    //             set.add(card);
    //         }
    //     }
    //     this.cards = [];
    //     for (let i = 0; i < 4; i++) {
    //         this.cards[i] = [];
    //     }
    //     this.points = [0, 0, 0, 0];
    //     this.maki = [0, 0, 0, 0];
    //     this.dumpling = [0, 0, 0, 0];
    //     this.tempura = [0, 0, 0, 0];
    //     this.sashimi = [0, 0, 0, 0];
    //     this.pudding = [0, 0, 0, 0];
    // }

    constructor(public id: number,
                public num_players: number,
                public mode: string,
                public recipe: number,
                public round: number,
                public status: string,
                public roomId: number,
                public decks: number[][],
                public hand: number[],
                public cards: number[][]) {}
}
