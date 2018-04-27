module.exports = function(mongoose, playModel) {
    var roomSchema = require('./room.schema.server.js')(mongoose);
    var roomModel = mongoose.model('Room', roomSchema);
    var api = {
        'createRoom': createRoom,
        'getRoomsNumber': getRoomsNumber,
        'findRoomById': findRoomById,
        'addPlayer' : addPlayer,
        'addPlayers' : addPlayers
    };

    return api;
    
    function createRoom(room, callback) {
        roomModel.create(room, function (err, room) {
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                return callback(null, room);
            }
        });
    }

    function getRoomsNumber(callback) {
        roomModel.find().exec(function (err, results) {
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                let count = results.length;
                return callback(null, count);
            }
        });
    }

    function findRoomById(roomId, callback) {
        roomModel.findOne({id : roomId}, function (err, res) {
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                return callback(null, res);
            }
        })
    }
    function addPlayer(roomId, player, callback) {
        roomModel.findOne({id : roomId}, function (err, room) {
            room.players.push(player._id);
            room.save(function (err) {
                if(!err) return callback(null, room);
            });
        })
    }
    
    function addPlayers(roomId, players, callback) {
        roomModel.findOne({id : roomId}, function (err, room) {
            players.forEach(function (player) {
                console.log('room.model.server.js: player to be added to room:\n');
                console.log(player);
                room.players.push(player._id);
            })
            room.save(function (err) {
                if(!err) {
                    console.log('room.model.server.js: room:\n');
                    console.log(room);
                    return callback(null, room);
                }
            });
        })
    }

};
