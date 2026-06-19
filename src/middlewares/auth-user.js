const JWT = require('jsonwebtoken');
const { SECRET_TOKEN } = require('../config/serverConfig');
const UserRepository = require('../repository/user-repository');
const userRepository = new UserRepository();

const isAuthenticUser = async (req, res, next) => {
    try {
     // Node automatically lowercases headers
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: 'Authorization header is missing',
                data: {},
                err: {}
            });
        }

        if (!authHeader.startsWith('Bearer')) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token format'
            });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
                data: {},
                err: {}
            });
        }
        
        const decodedToken = JWT.verify(token, SECRET_TOKEN);
        if(! decodedToken) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token',
                data: {},
                err: {}
            });
        }

        // check for valid user in database
        const validUser = await userRepository.findUserById(decodedToken.id);
        if(! validUser) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token - user does not exist',
                data: {},
                err: {}
            });
        }

        // Important for other services to know which user is making 
        // the request to get user Id from token and attach to req object
        req.user = validUser;
        next(); 
    }

    catch (error) {
        if(error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token has expired',
                data: {},
                err: error
            });
        }
        if(error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: 'Invalid token',
                data: {},
                err: error
            });
        }
        return res.status(401).json({
            success: false,
            message: 'Authentication failed',
            data: {},
            err: error
        });
    }

}

module.exports = isAuthenticUser;
