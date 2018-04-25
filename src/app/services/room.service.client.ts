import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../models/room.model.client';

// injecting service into module
@Injectable()

export class RoomService {
    constructor(private http: HttpClient) {
    }
    api = {
        'createRoom': this.createRoom,
    };

    createRoom(room: Room) {
        const url = '/api/room';
        console.log('room: ');
        console.log(room);
        return this.http.post<Room>(url, room);
    }

    findRoomById(roomId: string){

    }

}
