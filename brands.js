const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
	_id         : mongoose.Schema.Types.ObjectId,
	name        : String,
	img         : String,
	description : String,
	isDeleted   : { type: Boolean, default: false }
});

const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;
