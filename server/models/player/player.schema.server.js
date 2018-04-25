module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var playerSchema = new Schema({
        username : String,
        playerId : Number,
        roomId : String,
        // _game : {type: Schema.Types.ObjectId, ref: 'Game'},
        isHuman : {type: Boolean, default: true},
        playedCards : [Number],
        handCards : [Number],
        score: {type: Number, default: 0}
    }, {collection : 'player', usePushEach: true});

    return playerSchema;
};
