const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./connection/index');
// const UserRepository = require('./repository/userRepo');

dotenv.config();
const PORT = process.env.PORT
const userRepo = new UserRepository(); 
app.listen(PORT ,()=>{
    console.log(`Hello ${process.env.PORT}`);

    connectDB();
    // userRepo.createUser({name: "karthik",email: "rat@gmail.com", password: "123456"})
    console.log(`Server has started AT ${PORT}`);
})
