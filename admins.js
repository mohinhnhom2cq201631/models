const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const adminSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    position: {type: String, enum: ['Quản lý', 'Nhân viên']},
    isDeleted: {type:Boolean, default: false}
});

//hash the password
adminSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

//checking if password is valid
adminSchema.methods.validPassword = function (password){
    return bcrypt.compareSync(password,this.password);
};

const Admin =  mongoose.model('Admin', adminSchema);

module.exports = Admin;