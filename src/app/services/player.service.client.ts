import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../models/player.model.client';

// injecting service into module
@Injectable()

export class PlayerService {
    constructor(private http: HttpClient) {
    }
    api = {
    };



}
