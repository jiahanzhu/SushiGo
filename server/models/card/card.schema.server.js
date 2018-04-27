module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var cardSchema = new Schema({
        id : {type: Number, unique: true},
        cardType : {
            type : String,
            enum : ['Egg', 'Salmon', 'Squid', 'Maki_1', 'Maki_2', 'Maki_3', 'Tempura', 'Sashimi', 'Dumpling', 'Chopsticks', 'Wasabi', 'Pudding']}
    }, {collection: 'card', usePushEach: true});

    return cardSchema;
};
