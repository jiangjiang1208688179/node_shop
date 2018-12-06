var mongoose = require('./connect.js');
var goodsSchema = new mongoose.Schema({  //注意，模型中的数据要跟数据库中存放的数据类型保持一致，否者将会查询失败
    "id" : Number,
    "name" : String,
    "price" : Number,
    "privilegePrice" : Number,
    "imgUrl" : String,
    "remark" : String,
    "classifyId" : Number,
    "discount" : String
});
var goodsModel = mongoose.model('goods', goodsSchema);
module.exports = goodsModel