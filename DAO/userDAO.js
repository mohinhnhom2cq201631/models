const User = require('../users');

//get User list
exports.get_User_List = function(req,res,next){
    return User.find({isDeleted: false});
}