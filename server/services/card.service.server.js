module.exports = function (app, models) {


    app.get('api/card', getAllCards);
    app.get('api/card/:cardId', getCardById);


    function getAllCards(req, res) {
        models
            .cardModel
            .getCardsNumber(function (err, num) {
                if(!err){
                    if(num < 108){
                        models
                            .cardModel
                            .createDeck(function (err) {
                                if(!err){
                                    models
                                        .cardModel
                                        .getAllCards(function (err, cards) {
                                            if (!err) {
                                                res.send(cards);
                                            }
                                        })
                                }
                            })
                    }
                }
            })
    }
    function getCardById(req, res) {
        const cardId = req.params['cardId'];
        models
            .cardModel
            .getCard(cardId, function (err, card) {
                if(!err){
                    res.send(card);
                }
            })
    }
}