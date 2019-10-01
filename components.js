const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const componentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    type: {type: String, enum:['RAM','Chip','VGA','Dòng laptop']},
    description: String,
    isDeleted: {type:Boolean, default: false}
});

const Component = mongoose.model('Component', componentSchema);
module.exports = Component;