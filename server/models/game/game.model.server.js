module.exports = function(mongoose, cardModel) {
    var gameSchema = require('./game.schema.server.js')(mongoose);
    var gameModel = mongoose.model('Game', gameSchema);
    var api = {
        'createGame': createGame,
        'getGamesNumber': getGamesNumber,
        'findGameById': findGameById,
        'getDecks': getDecks,
        'getNextHand': getNextHand
    };

    return api;

    function createGame(game, callback) {
        gameModel.create(game, function (err, game) {
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                console.log('game.model.server.js 21 : game created: ');
                console.log(game);
                return callback(null, game);
            }
        });
    }

    function getGamesNumber(callback) {
        gameModel.find().exec(function (err, results) {
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                let count = results.length;
                console.log('game.model.server.js 36 : number of games: ');
                console.log(count);
                return callback(null, count);
            }
        });
    }

    function findGameById(gameId) {
        return gameModel.findOne({id : gameId});
    }

    function getDecks(num, game, callback) {
        game.decks = [];

        const set = new Set();
        for (let i = 0; i < num; i++) {
            game.decks[i] = [];
            for (let j = 0; j < 12 - num; j++) {
                let card;
                do {
                    card = Math.floor(Math.random() * 108);
                } while (set.has(card));
                game.decks[i][j] = card;
                set.add(card);
            }
        }

        console.log('game.model.server.js 63 : game.decks: ');
        console.log(game.decks);
        return callback(null, game);
    }
    
    function getNextHand(gameId, playerId, card_index, input_game, callback) {
        let game = input_game;
        const num = game.num_players;
        for(let i = 0; i < num - 1; ++i){
            let card = game.decks[i].shift();
            game.cards[i].push(card);
        }
        let val = game.decks[num - 1][card_index];
        game.decks[3].splice(card_index, 1);
        game.cards[3].push(val);
        const temp = this.decks[num - 1];
        for(let i = num - 1; i > 0; --i){
            game.decks[i] = game.decks[i - 1];
        }
        game.decks[0] = temp;
        console.log('game.model.server.js 84 : next hand: ');
        console.log(game);
        return callback(null, game);
    }


};
