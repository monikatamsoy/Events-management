var mongoose = require('mongoose'),
  schema = mongoose.Schema;

var UserSchema = new schema({
  username: String,
  password: String,
  email: String,
  role: String,
  post: String,
  contact: String,
  

}, {timestamps: { createdAt: 'created_at' }})

var user = mongoose.model('users', UserSchema, 'users');
module.exports = user;
