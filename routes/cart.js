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
});
router.post('/addcart', function(req, res, next){
    var reason = req.body.userId;//获取json
    var reason1 = req.body.goodsId;
    console.log(reason,reason1);
    var addcart = new cartModel(reason);
    addcart.save(function(err){   //通过add方法将数据添加到数据库
        if(err){
            console.log(err);
            res.send('err')
        }else{
            console.log('success');
            res.send('success')
        }
    })   
})
module.exports = router;