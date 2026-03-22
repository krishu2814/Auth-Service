const UserService = require('../services/user-service');

class UserController {
    constructor() {
        this.userService = new UserService();
    }   

    async createUser(req, res) {
        try {
            const user = await this.userService.createUser({
                email: req.body.email,
                password: req.body.password,
            });
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new user',
                data: user,
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }

    async getUserByEmail(req, res) {
        try {
            const user = await this.userService.getUserByEmail(req.params.email);
            if (!user) {
                return res.status(404).json({
                    message: 'User not found',
                    data: {},
                    success: false,
                    err: {}
                });
            }
            return res.status(200).json({
                message: 'User found',
                data: user,
                success: true,
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json({
                    message: 'User not found',
                    data: {},
                    success: false,
                    err: {}
                });
            }
            return res.status(200).json({
                message: 'User found',
                data: user,
                success: true,
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(201).json({
                success: true,
                message: 'Successfully updated a user',
                data: user,
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await this.userService.deleteUser(req.params.id);
            if (!user) {
                return res.status(404).json({
                    message: 'User not found',
                    data: {},
                    success: false,
                    err: {}
                });
            }
            return res.status(200).json({
                message: 'User deleted successfully',
                data: {},
                success: true,
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }
}

module.exports = UserController;    
