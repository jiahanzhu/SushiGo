module.exports = function (app, models) {

    app.get('/api/room/:roomId/players', findPlayersByRoomId);
    // app.get('api/room/:roomId/player/:username', findPlayerId);
    function findPlayersByRoomId(req, res) {
        const roomId = req.params['roomId'];
        console.log('player.service.server.js 7: ' + roomId);
        models
            .playerModel
            .findPlayersByRoomId(roomId, function (err, players) {
                if(!err){
                    console.log('players in room ' + roomId +": ");
                    console.log(players);
                    res.send(players);
                }else{
                    res.sendStatus(400).send(err);
                }
            })
    }

    // function findPlayerId(req, res) {
    //     const roomId = req.params['roomId'];
    //     const username = req.params['username'];
    //     console.log('player.service.server.js 22: ' + roomId + ' ' + username);
    //     models
    //         .playerModel
    //         .findPlayerId(roomId, username, function (err, player) {
    //             if(!err){
    //                 console.log('players located in room ' + roomId +": ");
    //                 console.log(player);
    //                 res.send(player);
    //             }
    //             else{
    //                 console.log('Broken from player.service.server.js: ' + roomId + ' ' + username);
    //                 res.send(err);
    //             }
    //         })
    // }

}
