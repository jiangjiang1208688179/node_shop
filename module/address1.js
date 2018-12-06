var mongoose = require('./connect.js');
var address1Schema = new mongoose.Schema({  //注意，模型中的数据要跟数据库中存放的数据类型保持一致，否者将会查询失败
    "userId": Number,
    "detail":[{
            "name": String,
            "tell": Number,
            "_address": String
        }]
});
var address1Model = mongoose.model('address', address1Schema);
module.exports = address1Model