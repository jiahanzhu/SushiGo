// server/model/models.server.js
module.exports = function() {
    var connectionString =  null;
    var dbuser = process.env.DB_USER;
    var dbpass = process.env.DB_PASS;
    var dburl = process.env.MONGODB_URI;

    if (process.env.MONGODB_URI) {
        connectionString = 'mongodb://heroku_sp1xbzrb:l3abf5iurua3qekpq4dcbs6igh@ds153869.mlab.com:53869/heroku_sp1xbzrb';
    }
    else {
        connectionString = 'mongodb://localhost:27017/SushiGo';
    }

    var mongoose = require('mongoose');
    mongoose.connect(connectionString);
    mongoose.Promise = require('q').Promise;


    var userModel = require("./user/user.model.server.js")(mongoose);
    var playerModel = require("./player/player.model.server.js")(mongoose, userModel);
    var gameModel = require("./game/game.model.server.js")(mongoose, playerModel);
    var cardModel = require("./card/card.model.server.js")(mongoose);


    var models = {
        'userModel' : userModel,
        'playerModel' : playerModel,
        'gameModel' : gameModel,
        'cardModel' : cardModel
    };

    return models;

};

