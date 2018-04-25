module.exports = function(mongoose, playModel) {
    var roomSchema = require('./room.schema.server.js')(mongoose);
    var roomModel = mongoose.model('Room', roomSchema);
    var api = {
        'createRoom': createRoom,
        'getRoomNumber': getRoomNumber
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

    function getRoomNumber(callback) {
        roomModel.find().exec(function (err, results) {
            let count = results.length;
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                return callback(null, count);
            }
        });
    }

};
