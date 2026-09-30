// user model for auth service
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['customer', 'admin', 'vendor'],
        default: 'customer',
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
