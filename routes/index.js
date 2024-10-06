const express = require('express');
const router = express.Router();
const userController = require("../controllers/UserController")

router.post('/signup', userController.SignUp);

router.get('/getUser', userController.GetUser);

router.delete('/delete',userController.DeleteUser);

router.put('/update', userController.UpdateUser)


module.exports =router;