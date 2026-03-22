const UserRepository = require('../repository/user-repository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        // check if user already exists
        const existingUser = await this.userRepository.findUserByEmail(data.email);
        if (existingUser) {
            throw new Error('User already exists');
        }
        // create new user
        console.log(data);
        return await this.userRepository.createUser(data);
    }

    async getUserByEmail(email) {
        return await this.userRepository.findUserByEmail(email);
    }

    async getUserById(id) {
        return await this.userRepository.findUserById(id);
    }

    async updateUser(id, data) {
        return await this.userRepository.updateUser(id, data);
    }

    async deleteUser(id) {
        return await this.userRepository.deleteUser(id);
    }
}

module.exports = UserService;
