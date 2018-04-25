import {Game} from '../models/game.model.client';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GameService {
    constructor(private http: HttpClient) {
    }

    api = {
//    'getNextId': this.getNextId,
        'createGame': this.createGame,
        'findAllGamesForUser': this.findAllGamesForUser,
        'findGameById': this.findGameById,
        'updateGame': this.updateGame,
        'removeGame': this.removeGame
    };

    // getMaxId() {
    //   function getMaxId(maxId, currentId) {
    //     let current = parseInt(currentId._id);
    //     if(maxId > current) {
    //       return maxId;
    //     } else {
    //       return current + 1;
    //     }
    //   }
    //   return games.reduce(getMaxId, 0).toString();
    // }
    createGame(userId: string, game) {
        const url = '/api/user/' + userId + '/game';
        return this.http.post<Game>(url, game);
    }

    findAllGamesForUser(userId: string) {
        const url = '/api/user/' + userId + '/game';
        return this.http.get<Game[]>(url);
    }

    findGameById(gameId: string) {
        const url = '/api/game/' + gameId;
        return this.http.get<Game>(url);
    }

    updateGame(gameId: string, game) {
        const url = '/api/game/' + gameId;
        return this.http.put<Game>(url, game);
    }

    removeGame(gameId: string) {
        const url = '/api/game/' + gameId;
        return this.http.delete<Game>(url);
    }
}
