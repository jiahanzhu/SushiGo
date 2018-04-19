// const cards = (function() {
//     // The global options
//     const opt = {
//         cardSize : {width: 69, height: 94, padding: 18},
//         animationSpeed : 500,
//         table : 'body',
//         cardback : 'red',
//         acesHigh : false,
//         cardsUrl : 'img/cards.png',
//         blackJoker : false,
//         redJoker : false
//     };
//     let zIndexCounter = 1;
//     const all = []; // All the cards created.
//
//     function mouseEvent(ev) {
//         const card = $(this).data('card');
//         if (card.container) {
//             const handler = card.container._click;
//             if (handler) {
//                 handler.func.call(handler.context || window, card, ev);
//             }
//         }
//     }
//
//     function init(options) {
//         if (options) {
//             for (let i in options) {
//                 if (opt.hasOwnProperty(i)) {
//                     opt[i] = options[i];
//                 }
//             }
//         }
//         const start = opt.acesHigh ? 2 : 1;
//         const end = start + 12;
//         opt.table = $(opt.table)[0];
//         if ($(opt.table).css('position') === 'static') {
//             $(opt.table).css('position', 'relative');
//         }
//         for (let i = start; i <= end; i++) {
//             all.push(new Card('h', i, opt.table));
//             all.push(new Card('s', i, opt.table));
//             all.push(new Card('d', i, opt.table));
//             all.push(new Card('c', i, opt.table));
//         }
//         if (opt.blackJoker) {
//             all.push(new Card('bj', 0, opt.table));
//         }
//         if (opt.redJoker) {
//             all.push(new Card('rj', 0, opt.table));
//         }
//
//         $('.card').click(mouseEvent);
//         shuffle(all);
//     }
//
//     function shuffle(deck) {
//         // Fisher yates shuffle
//         let i = deck.length;
//         if (i === 0) {
//             return;
//         }
//         while (--i) {
//             const j = Math.floor(Math.random() * (i + 1));
//             const tempi = deck[i];
//             const tempj = deck[j];
//             deck[i] = tempj;
//             deck[j] = tempi;
//         }
//     }
//
//     function Card(suit, rank, table) {
//         this.init(suit, rank, table);
//     }
//
//     Card.prototype = {
//         init: function (suit, rank, table) {
//             this.shortName = suit + rank;
//             this.suit = suit;
//             this.rank = rank;
//             this.name = suit.toUpperCase() + rank;
//             this.faceUp = false;
//             this.el = $('<div/>').css({
//                 width: opt.cardSize.width,
//                 height: opt.cardSize.height,
//                 'background-image': 'url(' + opt.cardsUrl + ')',
//                 position: 'absolute',
//                 cursor: 'pointer'
//             }).addClass('card').data('card', this).appendTo($(table));
//             this.showCard();
//             this.moveToFront();
//         },
//
//         toString: function () {
//             return this.name;
//         },
//
//         moveTo : function(x, y, speed, callback) {
//             const props = {top: y - (opt.cardSize.height / 2), left: x - (opt.cardSize.width / 2)};
//             $(this.el).animate(props, speed || opt.animationSpeed, callback);
//         },
//
//         rotate : function(angle) {
//             $(this.el)
//                 .css('-webkit-transform', 'rotate(' + angle + 'deg)')
//                 .css('-moz-transform', 'rotate(' + angle + 'deg)')
//                 .css('-ms-transform', 'rotate(' + angle + 'deg)')
//                 .css('transform', 'rotate(' + angle + 'deg)')
//                 .css('-o-transform', 'rotate(' + angle + 'deg)');
//         },
//
//         showCard : function() {
//             const offsets = { 'c': 0, 'd': 1, 'h': 2, 's': 3 };
//             let xpos, ypos;
//             let rank = this.rank;
//             if (rank === 14) {
//                 rank = 1; // Aces high must work as well.
//             }
//             xpos = -rank * opt.cardSize.width;
//             ypos = -offsets[this.suit] * opt.cardSize.height;
//             this.rotate(0);
//             $(this.el).css('background-position', xpos + 'px ' + ypos + 'px');
//         },
//
//         hideCard : function(position) {
//             const y = opt.cardback === 'red' ? 0 * opt.cardSize.height : -1 * opt.cardSize.height;
//             $(this.el).css('background-position', '0px ' + y + 'px');
//             this.rotate(0);
//         },
//
//         moveToFront : function() {
//             $(this.el).css('z-index', zIndexCounter++);
//         }
//     };
//
//     function Container() {
//
//     }
//
//     Container.prototype = new Array();
//     Container.prototype.extend = function(obj) {
//         for (let prop in obj) {
//             this[prop] = obj[prop];
//         }
//     };
//     Container.prototype.extend({
//         addCard : function(card) {
//             this.addCards([card]);
//         },
//
//         addCards : function(cards) {
//             for (let i = 0; i < cards.length; i++) {
//                 const card = cards[i];
//                 if (card.container) {
//                     card.container.removeCard(card);
//                 }
//                 this.push(card);
//                 card.container = this;
//             }
//         },
//
//         removeCard : function(card) {
//             for (let i = 0; i < this.length; i++) {
//                 if (this[i] === card) {
//                     this.splice(i, 1);
//                     return true;
//                 }
//             }
//             return false;
//         },
//
//         init : function(options) {
//             options = options || {};
//             this.x = options.x || $(opt.table).width() / 2;
//             this.y = options.y || $(opt.table).height() / 2;
//             this.faceUp = options.faceUp;
//         },
//
//         click : function(func, context) {
//             this._click = {func: func, context: context};
//         },
//
//         mousedown : function(func, context) {
//             this._mousedown = {func: func, context: context};
//         },
//
//         mouseup : function(func, context) {
//             this._mouseup = {func: func, context: context};
//         },
//
//         render : function(options) {
//             options = options || {};
//             let speed = options.speed || opt.animationSpeed;
//             this.calcPosition(options);
//             for (let i = 0; i < this.length; i++) {
//                 var card = this[i];
//                 zIndexCounter++;
//                 card.moveToFront();
//                 const top = parseInt($(card.el).css('top'));
//                 const left = parseInt($(card.el).css('left'));
//                 if (top !== card.targetTop || left !== card.targetLeft) {
//                     const props = {top: card.targetTop, left: card.targetLeft, queue: false};
//                     if (options.immediate) {
//                         $(card.el).css(props);
//                     } else {
//                         $(card.el).animate(props, speed);
//                     }
//                 }
//             }
//             const me = this;
//             const flip = function() {
//                 for (let i = 0; i < me.length; i++) {
//                     if (me.faceUp) {
//                         me[i].showCard();
//                     } else {
//                         me[i].hideCard();
//                     }
//                 }
//             };
//             if (options.immediate) {
//                 flip();
//             } else {
//                 setTimeout(flip, speed / 2);
//             }
//
//             if (options.callback) {
//                 setTimeout(options.callback, speed);
//             }
//         },
//
//         topCard : function() {
//             return this[this.length - 1];
//         },
//
//         toString: function() {
//             return 'Container';
//         }
//     });
//
//     function Deck(options) {
//         this.init(options);
//     }
//
//     Deck.prototype = new Container();
//     Deck.prototype.extend({
//         calcPosition : function(options) {
//             options = options || {};
//             let left = Math.round(this.x - opt.cardSize.width / 2);
//             let top = Math.round(this.y - opt.cardSize.height / 2);
//             const condenseCount = 6;
//             for (let i = 0; i < this.length; i++) {
//                 if (i > 0 && i % condenseCount === 0) {
//                     top -= 1;
//                     left -= 1;
//                 }
//                 this[i].targetTop = top;
//                 this[i].targetLeft = left;
//             }
//         },
//
//         toString : function() {
//             return 'Deck';
//         },
//
//         deal : function(count, hands, speed, callback) {
//             const me = this;
//             let i = 0;
//             const totalCount = count * hands.length;
//             function dealOne() {
//                 if (me.length === 0 || i === totalCount) {
//                     if (callback) {
//                         callback();
//                     }
//                     return;
//                 }
//                 hands[i % hands.length].addCard(me.topCard());
//                 hands[i % hands.length].render({callback: dealOne, speed: speed});
//                 i++;
//             }
//             dealOne();
//         }
//     });
//
//     function Hand(options) {
//         this.init(options);
//     }
//     Hand.prototype = new Container();
//     Hand.prototype.extend({
//         calcPosition : function(options) {
//             options = options || {};
//             const width = opt.cardSize.width + (this.length - 1) * opt.cardSize.padding;
//             const left = Math.round(this.x - width / 2);
//             const top = Math.round(this.y - opt.cardSize.height / 2);
//             for (let i = 0; i < this.length; i++) {
//                 this[i].targetTop = top;
//                 this[i].targetLeft = left + i * opt.cardSize.padding;
//             }
//         },
//
//         toString : function() {
//             return 'Hand';
//         }
//     });
//
//     function Pile(options) {
//         this.init(options);
//     }
//
//     Pile.prototype = new Container();
//     Pile.prototype.extend({
//         calcPosition : function(options) {
//             options = options || {};
//         },
//
//         toString : function() {
//             return 'Pile';
//         },
//
//         deal : function(count, hands) {
//             if (!this.dealCounter) {
//                 this.dealCounter = count * hands.length;
//             }
//         }
//     });
//
//
//     return {
//         init : init,
//         all : all,
//         options : opt,
//         SIZE : opt.cardSize,
//         Card : Card,
//         Container : Container,
//         Deck : Deck,
//         Hand : Hand,
//         Pile : Pile,
//         shuffle: shuffle
//     };
// })();
