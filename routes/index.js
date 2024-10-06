const express = require('express');
const router = express.Router();
const userController = require("../controllers/UserController")

router.post('/signup', userController.SignUp);

router.post('/signin', userController.SignIn);

router.delete('/delete',userController.DeleteUser);

module.exports =router;