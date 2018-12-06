var express = require('express');
var router = express.Router();
var goodsModel = require('../module/goods.js')
router.get('/', function(req, res, next){
    goodsModel.find({}, function(err, re){
        if(err) {
            res.render();
            console.log(err)
        } else {
            res.setHeader("Access-Control-Allow-Origin", "*");
            var result = {
                code: 200,
                message: 'success',
                result: re
            }
            res.send('200', result)
        }
    })
});
router.get('/detail', function(req, res, next){
    var goodsId = req.param('goodsId');  //拿到详情页面的参数goodsId
    goodsModel.find({id: goodsId}, function(err, re){   //通过id来筛选到相应的数据
        if(err){
            console.log(err);
        } else {
            var result, status = 200;
            if (!re.length){
                result = {
                    code: 404,
                    message: 'not found',
                    result: re
                }
                
            } else{
                result = {
                    code: 200,
                    message: 'success',
                    result: re
                }
            }
            res.send(status, result)
        }
    })
})
module.exports = router;