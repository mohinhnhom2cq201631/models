const Product = require('../products');

//get Product list
exports.get_Product_List = function(req,res,next){
    return Product.find({isDeleted: false}).populate('brand chip ram vga purpose');
}

//get Product by id
exports.get_Product_By_ID = (id) => {
    return Product.findOne({isDeleted: false, _id:id}).populate('brand chip ram vga purpose');
}