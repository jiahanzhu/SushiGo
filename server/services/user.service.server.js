var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function (app, models) {

  // GET Calls.
  app.get('/api/user', findUserAllUser);
  app.get('/api/user/:uid', findUserById);

  // POST Calls.
  app.post('/api/user', createUsers);

  // PUT Calls.
  app.put('/api/user/:uid', updateUser);

  // DELETE Calls.
  app.delete('/api/user/:uid', deleteUser);

  //Local
  app.post('/api/login', passport.authenticate('LocalStrategy'), login);
  app.get('/api/checkLoggedIn', checkLoggedIn);
  app.post('/api/register', register);
  app.get('/api/logout', logout);

  //LocalStrategy
  passport.use('LocalStrategy', new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function localStrategy(username, password, done) {
    models
      .userModel
      // .findUserByCredentials(username, password)
      .findUserByUsername(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          }
          else {
            return done(null, false);
          }
        },
        function (err) {
          if (err) {
            return done(err);
          }
        }
      );
  }


  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    models
      .userModel
      .findUserById(user._id)
      .then(
        function (user) {
          done(null, user);
        },
        function (err) {
          done(err, null);
        }
      );
  }


  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function checkLoggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : {loggedIn: false});
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    models
      .userModel
      .createUser(user)
      .then(
        function (user) {
          if (user) {
            req.login(user, function (err) {
              if (err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function logout(req, res) {
    req.logout();
    res.send('');
  }

  //API
  function createUsers(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    models
      .userModel
      .findUserByUsername(user.username)
      .then(
        function (response) {
          if (response) {
            res.sendStatus(400).send(error);
          } else {
            models
              .userModel
              .createUser(user)
              .then(
                function (newUser) {
                  res.json(newUser);
                },
                function (error) {
                  res.sendStatus(400).send(error);
                }
              );
          }
        }
      );
  }

  function findUserAllUser(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    if (username && password) {
      models
        .userModel
        .findUserByCredentials(username, password)
        .then(
          function (user) {
            if (user) {
              res.json(user);
            } else {
              res.send(null);
            }
          },
          function (error) {
            res.sendStatus(400).send(error);
          });

    } else if (username) {
      models
        .userModel
        .findUserByUsername(username)
        .then(
          function (user) {
            if (user) {
              res.json(user);
            } else {
              res.send(null);
            }
          },
          function (error) {
            res.sendStatus(400).send(error);
          });
    }

  }

  function findUserById(req, res) {
    var uid = req.params.uid;
    models
      .userModel
      .findUserById(uid)
      .then(
        function (user) {
          if (user) {
            res.json(user);
          } else {
            user = null;
            res.send(user);
          }
        },
        function (error) {
          res.sendStatus(400).send(error);
        }
      );
  }

  function updateUser(req, res) {
    var uid = req.params.uid;
    var new_user = req.body;
    models
      .userModel
      .updateUser(uid, new_user)
      .then(
        function (user) {
          res.json(user);
        },
        function (error) {
          res.sendStatus(400).send(error);
        });
  }

  function deleteUser(req, res) {
    var uid = req.params.uid;
    models
      .userModel
      .deleteUser(uid)
      .then(
        function (status) {
          res.send('');
        },
        function (error) {
          res.sendStatus(400).send(error);
        }
      );
  }
};
