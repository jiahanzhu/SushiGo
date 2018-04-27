import {Game} from '../models/game.model.client';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GameService {
    constructor(private http: HttpClient) {
    }

    api = {
        'createGame': this.createGame,
        'findGameById': this.findGameById,
        'getNextHand': this.getNextHand
    };

    createGame(roomId, playerId, game) {
        const url = 'api/room/' + roomId + '/player/' + playerId;
        return this.http.post(url, game);
    }

    getNextHand(gameId, activity) {
        const url = 'api/game/' + gameId;
        console.log('game.service.client.ts: activity');
        console.log(activity);
        return this.http.put(url, activity);
    }
    findGameById(gameId: number, playerId: number) {
        const url = '/api/game/' + gameId + '/player/' + playerId;
        return this.http.get<Game>(url);
    }
}
