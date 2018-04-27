module.exports = function (app, models) {

    app.post('/api/room/:roomId/game', createGame);

    app.get('/api/game/:gameId', findGameById);

    app.put('/api/game/:gameId', getNextHand);

    function createGame(req, res) {
        const roomId = req.params['roomId'];
        let game = req.body;
        models
            .gameModel
            .getGamesNumber(function (err, count) {
                if(!err){
                    ++count;
                    game.id = String(count);
                    models
                        .roomModel
                        .findRoomById(roomId, function (err, room) {
                            if(!err){
                                game.players = room.players;
                                // console.log('game.service.server.js 23: game to create: ');
                                // console.log(game);
                                models
                                    .gameModel
                                    .getDecks(room.num_players, game, function (err, updated_game) {
                                        if(!err) {
                                            updated_game.cards = [];
                                            updated_game.scores = [];
                                            for (let i = 0; i < updated_game.num_players; i++) {
                                                updated_game.cards[i] = [];
                                                updated_game.scores[i] = 0;
                                            }
                                            //
                                            // console.log('game.cards: ');
                                            // console.log(updated_game.cards);
                                            // console.log('game.decks: ');
                                            // console.log(updated_game.decks);
                                            models
                                                .gameModel
                                                .createGame(updated_game, function (err, result) {
                                                    if (!err) {
                                                        // console.log('game.service.server.js 39: game created: ');
                                                        // console.log(result);
                                                        res.send(result);
                                                    }
                                                });
                                        }
                                    })
                            }
                        })
                }
            })
    }

    function findGameById(req, res) {
        const gameId = req.params['gameId'];
        models
            .gameModel
            .findGameById(gameId)
            .then(
                function (game) {
                    if (game) {
                        res.json(game);
                    } else {
                        game = null;
                        res.send(game);
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


    function getNextHand(req, res) {
        console.log('game.service.server.js 79: Enter getNextHand()\n');
        const gameId = req.params['gameId'];
        const activity = req.body;
        const playerId = activity.playerId;
        const card_index = activity.card_index;
        const game = activity.game;
        console.log('game.service.server.js 84: getNextHand\n');
        console.log(activity);
        models
            .gameModel
            .getNextHand(gameId, playerId, card_index, game, function (err, results) {
                if(!err){
                    console.log('game.service.server.js 88: getNextHand\n');
                    console.log(results);
                    res.send(results);
                }else{
                    console.log('game.service.server.js 92: getNextHand\n');
                    console.log(err);
                    res.sendStatus(400).send(err);
                }
            })

    }


}
