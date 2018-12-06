var mongoose = require('mongoose');
// var goodeModel = requier('./goods.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shop',{ useNewUrlParser: true });
module.exports = mongoose;