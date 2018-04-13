var mongoose = require('mongoose'),
  schema = mongoose.Schema;

var reportSchema = new schema({
  event : String,
  attendees : String,
  agenda : String,
  username: String,
  date: String

}, {timestamps: { createdAt: 'created_at' }})

var report = mongoose.model('reports', reportSchema, 'reports');
module.exports = report;
