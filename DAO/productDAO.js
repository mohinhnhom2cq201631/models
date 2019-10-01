const Product = require('../products');

//get Product list
exports.get_Product_List = function(req,res,next){
    return Product.find({isDeleted: false}).populate('brand component');
}