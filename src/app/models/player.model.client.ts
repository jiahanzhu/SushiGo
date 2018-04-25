import {Card} from './card.model.client';
export class Player {
    constructor(public playerId: number,
                public roomId: string,
                public username: string,
                public isHuman: boolean,
                public playedCards?: number[],
                public handCards?: number[],
                public score?: number) {}
}
