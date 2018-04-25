module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var gameSchema = new Schema({
        id : Number,
        num_players : Number,
        players :[{type: Schema.Types.ObjectId, ref: 'Player'}],
        mode : {type: String, enum: ['PvE', 'PvP']},
        recipe : {
            type: Number,
            enum: [1,2,3,4,5,6,7,8]},
        round : {type: Number, enum: [1,2,3]},
        status: {type: String, enum: ['Prep', 'Playing', 'Ended']},
        decks: [[Number]],
        cards: [[Number]],
        scores: [Number],
        roomId: Number
    }, {collection: 'game', usePushEach: true});

    return gameSchema;
};
