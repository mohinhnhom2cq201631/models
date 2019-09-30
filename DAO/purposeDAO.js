const Purpose = require('../purposes');

//get purpose list
exports.get_Purpose_List = function(req,res,next){
    return Purpose.find({isDeleted: false});
}
