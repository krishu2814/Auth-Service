const JWT = require('jsonwebtoken');
const { SECRET_TOKEN } = require('../config/serverConfig');

const isAuthenticUser = (req, res, next) => {
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

    if (!authHeader.startsWith('Bearer ')) {
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

    // Important for other services to know which user is making 
    // the request to get user Id from token and attach to req object
    req.user = decodedToken;
    next(); 
}

module.exports = isAuthenticUser;
