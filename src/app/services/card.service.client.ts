import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../models/card.model.client';

// injecting service into module
@Injectable()

export class CardService {
    constructor(private http: HttpClient) {
    }
    api = {
    };



}
