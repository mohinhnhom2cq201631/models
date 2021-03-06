const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    // _id       : mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    email: String,
    googleId: String,
    info: {
        name: String,
        address: String,
        sdt: String
    },
    isDeleted: { type: Boolean, default: false }
});

//hash the password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;