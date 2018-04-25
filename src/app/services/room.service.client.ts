import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../models/room.model.client';
import {Player} from '../models/player.model.client';

// injecting service into module
@Injectable()

export class RoomService {
    constructor(private http: HttpClient) {
    }
    api = {
        'createRoom': this.createRoom,
        'findRoomById': this.findRoomById,
        'addPlayer': this.addPlayer,
        'generatePlayers': this.generatePlayers
    };

    createRoom(room: Room) {
        const url = '/api/room';
        console.log('room: ');
        console.log(room);
        return this.http.post<Room>(url, room);
    }

    findRoomById(roomId: string) {
        const url = '/api/room/' + roomId;
        return this.http.get<Room>(url);
    }
    addPlayer(player: Player) {
        const url = '/api/room/' + player.roomId + '/add-player';
        return this.http.put<Room>(url, player);
    }
    generatePlayers(roomId: string, players: Player[]) {
        const url = '/api/room/' + roomId;
        return this.http.put<Room>(url, players);
    }

}
