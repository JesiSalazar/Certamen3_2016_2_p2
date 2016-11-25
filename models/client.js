var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  name: { type: String }
});

module.exports = mongoose.model('Client', clientSchema);