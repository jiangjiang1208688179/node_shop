var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shop',{ useNewUrlParser: true });
var addressSchema = new mongoose.Schema({  //注意，模型中的数据要跟数据库中存放的数据类型保持一致，否者将会查询失败
    "userId": Number,
    "detail":[{
            "name": String,
            "tell": Number,
            "address": String
        }]
});
var addressModel = mongoose.model('addresses', addressSchema);   //此中，数据库表不能为'address'，否者拿不到数据，数据自动为null
module.exports = addressModel