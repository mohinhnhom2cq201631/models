const Admin = require('../Admins');

//get Admin list
exports.get_Admin_List = function(req,res,next){
    return Admin.find({isDeleted: false});
}