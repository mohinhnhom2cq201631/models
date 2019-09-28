const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purposeSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    isDeleted: {type:Boolean, default: false}
});

const Purpose = mongoose.model('Purpose', purposeSchema);
module.exports = Purpose;