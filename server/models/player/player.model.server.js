module.exports = function(mongoose, userModel) {
    var playerSchema = require('./player.schema.server.js')(mongoose);
    var playerModel = mongoose.model('Player', playerSchema);
    var api = {
        'createPlayers': createPlayers,
        'createPlayer': createPlayer,
        'findPlayersByRoomId': findPlayersByRoomId
        // 'findPlayerId': findPlayerId
    };

    return api;

    function createPlayers(players, callback) {
        playerModel.create(players, function (err, list) {
            if(err){
                console.log(err);
                callback(err);
            }else{
                console.log('player.model.server.js: Players added:');
                console.log(list);
                return callback(null, list);
            }
        })
    }
    function createPlayer(player) {
        playerModel.create(player, function (err, res) {
            if(!err){
                console.log('player.model.server.js: Player added:');
                console.log(res);
            }
        })
    }

    function findPlayersByRoomId(roomId, callback) {
        playerModel.find({roomId: roomId}, function (err, res) {
            if(err){
                callback(err);
            }
            else{
                return callback(null, res);
            }
        });
    }

    // function findPlayerId(roomId, username, callback) {
    //     console.log(roomId);
    //     console.log(username);
    //     playerModel.find({roomId: roomId}, function (err, res) {
    //         if(!err){
    //             console.log('Players in room ' + roomId +' found!');
    //             return callback(null, res);
    //         }
    //         else{
    //             console.log('findPlayerId went wrong!!')
    //         }
    //     });
    // }

};
