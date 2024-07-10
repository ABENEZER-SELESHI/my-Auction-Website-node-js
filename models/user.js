const { lowerCase } = require('lodash');
const mongoose = required('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    userName: {
        type: String,
        required: [true, 'username is required'],
        unique: true,
    },
    userImage: {
        type: Image,
        required: false,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        lowerCase: true,
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: [8, 'your password needs to be atleast 8 characters'],
    },

});

const User = mongoose.model('User', userSchema);

module.exports = User;
module.exports = userSchema;