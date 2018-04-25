module.exports = function(mongoose, roomModel) {
    var gameSchema = require('./game.schema.server.js')(mongoose);
    var gameModel = mongoose.model('Game', gameSchema);
    var api = {
    };

    return api;

};
