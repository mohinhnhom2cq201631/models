const Brand = require('../brands');

//get brand list
exports.get_Brand_List = function(req, res, next) {
	return Brand.find({ isDeleted: false });
};

//get brand by id
exports.get_Brand_By_ID = (id) => {
	return Brand.findOne({ _id: id, isDeleted: false });
};
