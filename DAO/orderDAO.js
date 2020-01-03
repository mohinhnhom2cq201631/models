const Order = require('../orders');

//get Order list
exports.get_Order_List = function(req,res,next){
    return Order.find({isDeleted: false}).populate('user');
}

//get User Info by order id
exports.get_User_By_OrderID = async id =>{
    const order = await Order.findById(id,'user').populate('user');
    return await User.findById(order.user);
}

exports.get_Order_By_ID = id => {
    return Order.findById(id).populate('user');
}

exports.get_Order_List_By_UserID = async id => {
    return Order.find({user: id, isDeleted: false});
}