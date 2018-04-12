var mongoose = require('mongoose'),
  schema = mongoose.Schema;

var UserSchema = new schema({
  username: String,
  password: String
})

var user = mongoose.model('users', UserSchema, 'users');
module.exports = user;
