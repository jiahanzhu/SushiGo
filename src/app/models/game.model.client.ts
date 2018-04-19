import {Card} from './card.model.client';
import {User} from './user.model.client';

export class Game {
    id: string;
    user: User;
    decks: number[][]; // original switched deck of cards
    cards: number[][]; // users' final deck of cards
    points: number[]; // users' final points
    maki: number[]; // users' numbers of maki cards
    dumpling: number[]; // users' numbers of dumpling cards
    tempura: number[]; // users' numbers of tempura cards
    sashimi: number[]; // users' numbers of sashimi cards
    pudding: number[]; // users' numbers of pudding cards

    constructor(id, user) {
        this.id = id;
        this.user = user;
        this.decks = [];
        const set = new Set();
        for (let i = 0; i < 4; i++) {
            this.decks[i] = [];
            for (let j = 0; j < 8; j++) {
                let card;
                do {
                    card = Math.floor(Math.random() * 108);
                } while (set.has(card));
                this.decks[i][j] = card;
                set.add(card);
            }
        }
        this.cards = [];
        for (let i = 0; i < 4; i++) {
            this.cards[i] = [];
        }
        this.points = [];
        this.maki = [];
        this.dumpling = [];
        this.tempura = [];
        this.sashimi = [];
        this.pudding = [];
    }
}
