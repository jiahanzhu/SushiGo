module.exports = function(mongoose, userModel) {
    var playerSchema = require('./player.schema.server.js')(mongoose);
    var playerModel = mongoose.model('Player', playerSchema);
    var api = {
    };

    return api;

};
