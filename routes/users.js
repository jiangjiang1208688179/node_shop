var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test', function(req, res, next) {
  res.render('test');  //res.send 与  res.render的区别，send是直接发送里边的内容， render是渲染 views中的html或者ejs文件
});

module.exports = router;
