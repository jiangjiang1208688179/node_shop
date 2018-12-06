var mongoose = require('./connect.js');
var cartSchema = new mongoose.Schema({
    // "goodsI" : {type: Number, ref: 'goodeModel'},
    "userId" :Number,
    "goodsId" : Number,
    "quantity" : Number
});
cartModel = mongoose.model('carts', cartSchema);
module.exports = cartModel;