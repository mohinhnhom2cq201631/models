const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    img: String,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    purpose: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Purpose'
    },
    size: Number,
    price: Number,
    description: String,
    isDeleted: {type:Boolean, default: false}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;