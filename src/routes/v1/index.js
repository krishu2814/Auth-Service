const express = require("express");
const router = express.Router();

const UserController = require('../../controllers/user-contoller');
const userController = new UserController();

// router.post('/signup', userController.createUser.bind(userController));
router.get('/user/email/:email', userController.getUserByEmail.bind(userController));
router.get('/user/:id', userController.getUserById.bind(userController));
router.patch('/user/:id', userController.updateUser.bind(userController));
router.delete('/user/:id', userController.deleteUser.bind(userController));
router.post('/signup', userController.signUp.bind(userController));
router.post('/login', userController.signIn.bind(userController));

module.exports = router;
