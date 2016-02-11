var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Produce = new Schema({
  name: String,
  type: String,
  seasonAvailable: String,
  monthsAvailable: Array
});

module.exports = mongoose.model('produce', Produce);
