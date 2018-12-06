var mongoose = require('mongoose');
var goodeModel = requier('../goods.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shop',{ useNewUrlParser: true });
var cartSchema = new mongoose.Schema({
    "goodsI" : {type: Number, ref: 'goodeModel'},
    "userId" :Number,
    "goodsId" : Number,
    "quantity" : Number
});
cartModel = mongoose.model('carts', cartSchema);
module.exports = cartModel;