module.exports = function (app, models) {

    // POST Calls.
    app.post('/api/room', createRoom);

    app.get('/api/room/:roomId', findRoomById);

    app.put('/api/room/:roomId', generatePlayers);
    app.put('/api/room/:roomId/add-player', addPlayer);



    function createRoom(req, res) {
        let room = req.body;
        models
            .roomModel
            .getRoomsNumber(function (err, count) {
                if(!err){
                    ++count;
                    room.id = String(count);
                    models
                        .roomModel
                        .createRoom(room, function (err, room) {
                            if(!err){
                                console.log('room.service.server.js: room created: ');
                                console.log(room);
                                res.send(room);
                            }
                        });
                }
            })
    }

    function findRoomById(req, res) {
        const roomId = req.params['roomId'];
        models
            .roomModel
            .findRoomById(roomId, function (err, room) {
                if(err){
                    res.send(err);
                } else{
                    res.send(room);
                }
            });
    }

    function addPlayer(req, res) {
        const roomId = req.params['roomId'];
        const player = req.body;
        models
            .roomModel
            .addPlayer(roomId, player, function (err, room) {
                if(!err){
                    console.log('room.service.server.js: room after adding player:');
                    console.log(room);
                    res.send(room);
                }
            });
    }

    function generatePlayers(req, res) {
        const roomId = req.params['roomId'];
        const players = req.body;
        models
            .playerModel
            .createPlayers(players, function (err, response) {
                if(err) res.send(err);
                else{
                    console.log('room.service.server.js: players added:');
                    console.log(response);
                    models
                        .roomModel
                        .addPlayers(roomId, response, function (err, room) {
                            if(!err){
                                console.log('room.service.server.js 75: room after adding players:');
                                console.log(room);
                                res.send(room);
                            }
                            else{
                                console.log('room.service.server.js 80: error occurred');
                                res.sendStatus(400).send(err);
                            }
                        })
                }

            })

    }


}
