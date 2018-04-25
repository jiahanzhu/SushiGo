module.exports = function(app){
  var models = require("./models/models.server.js")();
    require("./services/user.service.server.js")(app, models);
    require("./services/room.service.server.js")(app, models);
    require("./services/player.service.server.js")(app, models);
    require("./services/game.service.server.js")(app, models);
    require("./services/card.service.server.js")(app, models);

};
