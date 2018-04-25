module.exports = function(mongoose, userModel) {
    var playerSchema = require('./player.schema.server.js')(mongoose);
    var playerModel = mongoose.model('Player', playerSchema);
    var api = {
        'createPlayers': createPlayers,
        'createPlayer': createPlayer
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

};
