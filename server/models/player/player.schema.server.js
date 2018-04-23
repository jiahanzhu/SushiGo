module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var playerSchema = new Schema({
        _user : {type: Schema.Types.ObjectId, ref: 'User'},
        // _game : {type: Schema.Types.ObjectId, ref: 'Game'},
        playedCards : [{type: Schema.Types.ObjectId, ref: 'Card'}],
        handCards : [{type: Schema.Types.ObjectId, ref: 'Card'}],
        score: {type: Number, default: 0}
    }, {collection : 'player', usePushEach: true});

    return playerSchema;
};
