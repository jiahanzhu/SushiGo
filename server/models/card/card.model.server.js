module.exports = function(mongoose) {
    var cardSchema = require('./card.schema.server.js')(mongoose);
    var cardModel = mongoose.model('Card', cardSchema);
    const NUM_CARDS = 108;
    var api = {
        'getCard': getCard,
        'createDeck': createDeck,
        'deleteDeck': deleteDeck
    };

    return api;


    // Initialize 108 cards:
    // if(cards.size == 0) create 108 cards in db
    function createDeck() {
        var i;
        for(i = 0; i < NUM_CARDS; i++) {
            if(i < 5){
                cardModel.create({id: i, type: 'Egg'}, function (err, res) {
                    if(!err) console.log(res.type + ' created!');
                    else return err;
                });
            } else if(i < 15){
                cardModel.create({id: i, type: 'Salmon'});
            } else if(i < 20){
                cardModel.create({id: i, type: 'Squid'});
            } else if(i < 26){
                cardModel.create({id: i, type: 'Maki_1'});
            } else if(i < 38){
                cardModel.create({id: i, type: 'Maki_2'});
            } else if(i < 46){
                cardModel.create({id: i, type: 'Maki_3'});
            } else if(i < 60){
                cardModel.create({id: i, type: 'Tempura'});
            } else if(i < 74){
                cardModel.create({id: i, type: 'Sashimi'});
            } else if(i < 88){
                cardModel.create({id: i, type: 'Dumpling'});
            } else if(i < 94){
                cardModel.create({id: i, type: 'Chopsticks'});
            } else if(i < 98){
                cardModel.create({id: i, type: 'Wasabi'});
            } else if(i < 108){
                cardModel.create({id: i, type: 'Pudding'});
            }
        }
    }

    function deleteDeck() {
        cardModel.remove({});
    }

    function getCard(cardId) {
        return cardModel.findById(cardId);
    }
};
