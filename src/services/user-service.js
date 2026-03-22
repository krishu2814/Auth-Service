const UserRepository = require('../repository/user-repository');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const { SECRET_TOKEN, EXPIRES_IN } = require('../config/serverConfig');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signIn(data) {
    try {
        const { email, password } = data;

        if (!email || !password) {
            throw new Error("Email and password are required");
        }

        // 1️) check if user exists
        const existingUser = await this.userRepository.findUserByEmail(email);
        if (!existingUser) {
            throw new Error("User does not exist.");
        }

        // 2️) compare password
        const matchedPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchedPassword) {
            throw new Error("Invalid password.");
        }

        // 3️) remove password before sending response
        existingUser.password = undefined;

        // 4️) generate token
        const token = JWT.sign(
            { id: existingUser._id, email: existingUser.email },
            SECRET_TOKEN,
            { expiresIn: EXPIRES_IN }
        );

        // 5️) return response
        return { user: existingUser, token };

        } catch (error) {
            throw error;
        }
    }

    async signUp(data) {

        if (!data.email || !data.password) {
            throw new Error("Email and password are required");
        }
        // check if user exists
        const existingUser = await this.userRepository.findUserByEmail(data.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        // hash password
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // create user
        const user = await this.userRepository.createUser({
            ...data,
            password: hashedPassword
        });

        // remove password before sending
        user.password = undefined;

        // generate token
        const token = JWT.sign(
            { id: user._id, email: user.email },
            SECRET_TOKEN,
            { expiresIn: EXPIRES_IN }
        );

        return { user, token };
    }

    async createUser(data) {
        // check if user already exists
        const existingUser = await this.userRepository.findUserByEmail(data.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        // hash the password before saving to database
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;

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
