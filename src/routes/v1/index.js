const express = require("express");
const router = express.Router();

const UserController = require('../../controllers/user-controller');
const userController = new UserController();
const isAuthenticUser = require('../../middlewares/auth-user');

// router.post('/signup', userController.createUser.bind(userController));
// router.get('/user/email/:email', userController.getUserByEmail.bind(userController));
// router.get('/user/:id', userController.getUserById.bind(userController));
router.post('/signup', userController.signUp.bind(userController));
router.post('/login', userController.signIn.bind(userController));
router.post('/signin', userController.signIn.bind(userController));
router.get('/profile', isAuthenticUser, (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'User profile fetched successfully',
        data: req.user,
        err: {}
    });
});
router.patch('/user/:id', isAuthenticUser, userController.updateUser.bind(userController));
router.delete('/user/:id', isAuthenticUser, userController.deleteUser.bind(userController));

/**
 * Route for API GATEWAY SERVICE
 * This route will be called by API Gateway to verify if the user is authenticated or not
 * API Gateway will send the token in the Authorization header and this route will verify the token 
 * and return the user details if the token is valid
 */

router.get('/isAuthenticated', isAuthenticUser, (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'User is authenticated',
        data: req.user,
        err: {}
    });
});

module.exports = router;
