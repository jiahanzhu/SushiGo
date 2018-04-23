module.exports = function(mongoose){
    var userSchema = require('./user.schema.server.js')(mongoose);
    var userModel = mongoose.model('User', userSchema);
    const findOrCreate = require('mongoose-findorcreate');
    userSchema.plugin(findOrCreate);


    var api = {
        'createUser' : createUser,
        'findUserById' : findUserById,
        'findUserByUsername' : findUserByUsername,
        'findUserByCredentials' : findUserByCredentials,
        'updateUser' : updateUser,
        'deleteUser' : deleteUser
    };

    return api;



    function createUser(user){
        var newUser = {
            username : user.username,
            password : user.password,
            email : user.email
        };

        if(user.firstName){
            newUser.firstName = user.firstName;
        }
        if(user.lastName){
            newUser.lastName = user.lastName;
        }
        if(user.email){
            newUser.email = user.email;
        }
        if(user.phone){
            newUser.phone = user.phone;
        }

        return userModel.create(newUser);
    }

    function findUserById(userId){
        return userModel.findById(userId);
    }

    function findUserByUsername(username){
        return userModel.findOne({username : username})
    }


    function findUserByCredentials(username, password){
        return userModel.findOne({
            username : username,
            password : password
        });
    }

    function updateUser(userId, user){
        return userModel.update({
            _id : userId
        }, {
            username : user.username,
            email : user.email
        });
    }

    function deleteUser(userId){
        return userModel.remove({
            _id : userId
        });
    }
};
