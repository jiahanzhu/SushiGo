module.exports = function (app, models) {

    app.post('/api/room/:roomId/player/:playerId', createGame);

    app.get('/api/game/:gameId/player/:playerId', findGameById);

    app.put('/api/game/:gameId', getNextHand);

    function createGame(req, res) {
        const roomId = req.params['roomId'];
        const playerId = req.params['playerId'];
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
                                    .getDecks(room.num_players, game, function (err, game_with_decks) {
                                        if(!err) {
                                            game_with_decks.cards = [];
                                            game_with_decks.scores = [];
                                            for (let i = 0; i < updated_game.num_players; i++) {
                                                game_with_decks.cards[i] = [];
                                                game_with_decks.scores[i] = 0;
                                            }
                                            //
                                            // console.log('game.cards: ');
                                            // console.log(updated_game.cards);
                                            // console.log('game.decks: ');
                                            // console.log(updated_game.decks);
                                            models
                                                .gameModel
                                                .createGame(game_with_decks, function (err, new_game) {
                                                    if (!err) {
                                                        console.log('game.service.server.js function [createGame]: game created: ');
                                                        console.log(new_game);
                                                        models
                                                            .gameModel
                                                            .findGameById(new_game.id, playerId)
                                                            .then(
                                                                function (game_with_hand) {
                                                                    if (game_with_hand) {
                                                                        res.json(game_with_hand);
                                                                    } else {
                                                                        game = null;
                                                                        res.send(game_with_hand);
                                                                    }
                                                                },
                                                                function (error) {
                                                                    res.sendStatus(400).send(error);
                                                                }
                                                            )
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
        const playerId = req.params['playerId'];
        models
            .gameModel
            .findGameById(gameId, playerId)
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
