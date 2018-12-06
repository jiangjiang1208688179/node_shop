var express = require('express');
var router = express.Router();
var address1Model = require('../module/address1.js')
router.get('/', function(req, res, next){
    address1Model.find({}, function(err, re){
        if(err) {
            console.log(err)
        } else {
            var result = {
                code: 200,
                message: 'success',
                result: re
            }
            res.send('200', result)
        }
    })
})
module.exports = router;