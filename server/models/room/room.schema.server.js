module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var roomSchema = new Schema({
        id : {type: String, unique: true},
        num_players : Number,
        players :[{type: Schema.Types.ObjectId, ref: 'Player'}],
        mode : {type: String, enum: ['PvE', 'PvP']}
    }, {collection: 'room', usePushEach: true});

    return roomSchema;
};
