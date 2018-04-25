import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../models/player.model.client';

// injecting service into module
@Injectable()

export class PlayerService {
    constructor(private http: HttpClient) {
    }
    api = {
        'findPlayersByRoomId': this.findPlayersByRoomId
        // 'findPlayerId': this.findPlayerId
    };

    findPlayersByRoomId(roomId) {
        const url = 'api/room/' + roomId + '/players';
        return this.http.get<Player[]>(url);
    }
    // findPlayerId(roomId, username) {
    //     const url = 'api/room/' + roomId + '/player/' + username;
    //     console.log('hello from player.service.client.ts: ' + url);
    //     return this.http.get<Player>(url);
    // }

}
