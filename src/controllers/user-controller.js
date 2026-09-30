const UserService = require('../services/user-service');

class UserController {
    constructor() {
        this.userService = new UserService();
    }   

    async signIn(req, res, next) {
        try {
            const user = await this.userService.signIn({
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            });
            return res.status(200).json({
                success: true,
                message: 'Successfully signed in',
                data: user,
                err: {}
            });
        } catch (error) {
            next(error);
        }
    }

    async signUp(req, res, next) { 
        try {
            const user = await this.userService.signUp({
                name: req.body.name,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            });
            return res.status(201).json({
                success: true,
                message: 'Successfully signed up',
                data: user,
                err: {}
            }); 
        } catch (error) {
            next(error);
        }
    }

    async createUser(req, res, next) {
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
            next(error);
        }
    }

    async getUserByEmail(req, res, next) {
        try {
            const user = await this.userService.getUserByEmail(req.params.email);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found',
                    data: {},
                    err: {}
                });
            }
            return res.status(200).json({
                success: true,
                message: 'User found',
                data: user,
                err: {}
            });
        } catch (error) {
            next(error);
        }
    }

    async getUserById(req, res, next) {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found',
                    data: {},
                    err: {}
                });
            }
            return res.status(200).json({
                success: true,
                message: 'User found',
                data: user,
                err: {}
            });
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found',
                    data: {},
                    err: {}
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Successfully updated a user',
                data: user,
                err: {}
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req, res, next) {
        try {
            const user = await this.userService.deleteUser(req.params.id);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found',
                    data: {},
                    err: {}
                });
            }
            return res.status(200).json({
                success: true,
                message: 'User deleted successfully',
                data: {},
                err: {}
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;    
