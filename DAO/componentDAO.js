const Component = require('../components');

//get Component list
exports.get_Component_List = function(req,res,next){
    return Component.find({isDeleted: false});
}
