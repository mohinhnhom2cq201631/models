const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
    },
    cart: {type: Object, required: true},
    payment: {type: String, enum:['Ship COD','Credit card']},
    created: Date,
    status: {type: String, enum:['Đã giao', 'Đang giao', 'Chưa giao']},
    isDeleted: {type:Boolean, default: false}
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;