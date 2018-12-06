var express = require('express');
var router = express.Router();
var cartModel = require('../module/cart');
var goodsModel = require('../module/goods');
router.get('/', function(req, res, next){
    // var goodsId = req.param('gId');
    // goodsModel.find({'id': goodsId}, 'name price privilegePrice imgUrl discount', function(err, re){

    // })
    // cartModel.find().populate({
    //     path: 'goodsI',
    //     select:'_id name price priviledgePrice imgUrl discount',
    //     model: goodsModel
    // }).exec(function(err, list){
    //     console.log(list);
    //     res.send(200, list);
    // })
    cartModel.find().populate({
        path: 'goodsI',
        model: goodsModel,
        select: '_id name'
    }).exec(function(err, list){
        console.log(list);
        res.send(200, list);
    })
})
module.exports = router;