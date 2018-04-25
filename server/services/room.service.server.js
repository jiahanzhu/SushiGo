module.exports = function (app, models) {

    // POST Calls.
    app.post('/api/room', createRoom);


    function createRoom(req, res) {
        let room = req.body;
        models
            .roomModel
            .getRoomNumber(function (err, count) {
                if(!err){
                    ++count;
                    room.id = String(count);
                    models
                        .roomModel
                        .createRoom(room, function (err, room) {
                            if(!err){
                                console.log('room.service.server.js: room create: ' + room);
                                res.send(room);
                            }
                        });
                }
            })
    }



}
