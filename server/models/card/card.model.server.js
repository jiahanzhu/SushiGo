module.exports = function(mongoose) {
    var cardSchema = require('./card.schema.server.js')(mongoose);
    var cardModel = mongoose.model('Card', cardSchema);
    const NUM_CARDS = 108;
    var api = {
        'getCard': getCard,
        'getAllCards': getAllCards,
        'createDeck': createDeck,
        'deleteDeck': deleteDeck,
        'getCardsNumber' : getCardsNumber
    };

    return api;


    function getCardsNumber(callback) {
        cardModel.find().exec(function (err, results) {
            let count = results.length;
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                console.log('there are ' + count + ' cards!');
                return callback(null, count);
            }
        });
    }
    // Initialize 108 cards:
    // if(cards.size == 0) create 108 cards in db
    function createDeck(callback) {
        cardModel.remove({}, function (err) {
            if(!err){
                var i;
                for(i = 0; i < NUM_CARDS; i++) {
                    if(i < 5){
                        cardModel.create({id: i, cardType: 'Egg'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 15){
                        cardModel.create({id: i, cardType: 'Salmon'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 20){
                        cardModel.create({id: i, cardType: 'Squid'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 26){
                        cardModel.create({id: i, cardType: 'Maki_1'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 38){
                        cardModel.create({id: i, cardType: 'Maki_2'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 46){
                        cardModel.create({id: i, cardType: 'Maki_3'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 60){
                        cardModel.create({id: i, cardType: 'Tempura'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 74){
                        cardModel.create({id: i, cardType: 'Sashimi'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 88){
                        cardModel.create({id: i, cardType: 'Dumpling'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 94){
                        cardModel.create({id: i, cardType: 'Chopsticks'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 98){
                        cardModel.create({id: i, cardType: 'Wasabi'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    } else if(i < 108){
                        cardModel.create({id: i, cardType: 'Pudding'}, function (err, res) {
                            if(!err) console.log(res.cardType + ' created!');
                            else return err;
                        });
                    }
                }
                return callback(null);
            }
            else callback(err);
        });

    }

    function deleteDeck(callback) {
        cardModel.remove({}, function (err) {
            if(!err){
                return callback(null);
            }
        });
    }

    function getCard(cardId, callback) {
        cardModel.findOne({id : cardId}, function (err, res) {
            if(err){
                callback(err);
            }else{
                return callback(null, res);
            }
        })
    }

    function getAllCards(callback) {
        cardModel.find({},function (err, res) {
            if(!err){
                return callback(null, res);
            }else{
                callback(err);
            }
        });
    }
};
