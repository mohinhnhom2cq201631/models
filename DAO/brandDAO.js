const Brand = require('../brands');

//get brand list
exports.get_Brand_List = function(req,res,next){
    return Brand.find({isDeleted: false});
}