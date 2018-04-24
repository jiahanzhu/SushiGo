//using express with node js
var express = require('express');

//initialize app as an express application
var app = express();

app.set('port', (process.env.PORT || 3000));
var server = app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

var io = require('socket.io').listen(server);


var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET || "This is the secret",
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + '/dist'));
require("./server/app.js")(app);
app.use(function(req, res) {
    // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendFile(__dirname + '/dist/index.html');
});



io.on('connection', function (socket) {
    socket.emit('hello', { greeting: 'hello world!' });
    console.log( 'User ' + socket.id + ' connected!' );
    socket.on('disconnect', function() {
        console.log('User ' + this.id + ' disconnected!');
    });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});