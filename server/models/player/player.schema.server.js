module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var playerSchema = new Schema({
        username : String,
        playerId : Number,
        roomId : String,
        // _game : {type: Schema.Types.ObjectId, ref: 'Game'},
        isHuman : {type: Boolean, default: true},
        playedCards : [{type: Schema.Types.ObjectId, ref: 'Card'}],
        handCards : [{type: Schema.Types.ObjectId, ref: 'Card'}],
        score: {type: Number, default: 0}
    }, {collection : 'player', usePushEach: true});

    return playerSchema;
};
