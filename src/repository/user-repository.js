// user repository

const User = require('../models/user-model');

class UserRepository {
    async createUser(data) {
        return await User.create(data);
    }

    async findUserByEmail(email) {
        return await User.findOne({ email });
    }

    async findUserById(id) {
        return await User.findById(id);
    }

    async updateUser(id, data) { 
        return await User.findByIdAndUpdate(id, data,).save(); // return updated user
    }

    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }
    
}

module.exports = UserRepository;
