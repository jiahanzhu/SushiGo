import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../models/card.model.client';
import {Game} from '../models/game.model.client';

// injecting service into module
@Injectable()

export class CardService {
    constructor(private http: HttpClient) {
    }
    api = {
        'getAllCards': this.getAllCards,
        'getCardById': this.getCardById
    };

    getAllCards() {
        const url = 'api/card/';
        return this.http.get<Card[]>(url);
    }
    getCardById(cardId) {
        const url = 'api/card/' + cardId;
        return this.http.get<Card>(url);
    }


}
