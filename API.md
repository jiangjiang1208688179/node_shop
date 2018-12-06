API
======================

####  1、 index页面goods接口                                                
*127.0.0.1:3001/goods                  get请求*
####  2、商品详情页面detail 接口（必须要有参数goodsId）      127.0.0.1:3001/goods/detail?goodsId=           get请求
####  3、cart页面 （通过传参数uId）                                      
   *a、获取购物车列表        127.0.0.1:3001/cart?uId=         get请求*         
   *b、加入购物车              127.0.0.1:3001/cart/addcart      post请求(post一个对象过来) *     
   *c、立即购买（暂时没有弄） *
####  4、地址管理（一个地方是在：我的/收货地址/地址列表          另一个地方是在：立即购买中会选着地址）
   *a、获取所有地址列表       127.0.0.1:3001/address               get请求
   b、编辑单个地址             127.0.0.1:3001/editAddress         post请求
   c、删除地址                    127.0.0.1:3001/delectAddress     post请求*
   
 ####  统一获取数据方式
 re.data.result
   
  