var mongoose = require('mongoose');

var produceSchema = mongoose.Schema({
  name: {type: String},
  type: {type: String},
  seasonAvailable: {type: String},
  monthAvailable: {type: String}
});

module.exports = mongoose.model('Produce', produceSchema);
