module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var gameSchema = new Schema({
        num_players : Number,
        players :[{type: Schema.Types.ObjectId, ref: 'Player'}],
        mode : {type: String, enum: ['PvE', 'PvP']},
        recipe : {
            type: Number,
            enum: [1,2,3,4,5,6,7,8]},
        round : {type: Number, enum: [1,2,3]},
        status: {type: String, enum: ['Prep', 'Playing', 'Ended']},
        room: {type: Schema.Types.ObjectId, ref: 'Room'}
    }, {collection: 'game', usePushEach: true});

    return gameSchema;
};
