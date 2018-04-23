module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var userSchema = new Schema({
        username : {type : String, required : true, unique: true},
        password : {type : String, required : true},
        email : String,
        historyScore: Number

    }, {collection: 'user', usePushEach: true});

    return userSchema;
};
