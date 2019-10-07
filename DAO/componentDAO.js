const Component = require('../components');

//get Component list
exports.get_Component_List = function(req,res,next){
    return Component.find({isDeleted: false});
}

//get Purpose Component list
exports.get_Purpose_Component_List = function(req,rest,next){
    return Component.find({isDeleted: false, type:'Dòng laptop'});
}

//get Chip Component list
exports.get_Chip_Component_List = function(req,rest,next){
    return Component.find({isDeleted: false, type:'Chip'});
}

//get RAM Component list
exports.get_RAM_Component_List = function(req,rest,next){
    return Component.find({isDeleted: false, type:'RAM'});
}

//get VGA Component list
exports.get_VGA_Component_List = function(req,rest,next){
    return Component.find({isDeleted: false, type:'VGA'});
}

//get Component by id
exports.get_Component_By_ID = (id) =>{
    return Component.findOne({isDeleted: false, _id: id});
}