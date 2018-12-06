var express = require('express');
var router = express.Router();
var addressModel = require('../module/address.js');
router.get('/', function(req, res, next){
    // var userId = parseFloat(req.param('uId'));
    // console.log(debug);
    addressModel.find({}, function(err, re){
        console.log(re, err);
        if(err){
            console.log(err);
        } else {
            var status = '200';
            if (!re.length){
                var result = {
                    code: 404,
                    message: 'not found',
                    data: re
                }
                
            } else{
                var result = {
                    code: 200,
                    message: 'success',
                    data: re
                }
            }
            res.send(status, result)
        }
    })
})
module.exports = router;