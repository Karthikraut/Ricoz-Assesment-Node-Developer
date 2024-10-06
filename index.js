const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./connection/index');

dotenv.config();
const PORT = process.env.PORT

app.listen(PORT ,()=>{
    console.log(`Hello ${process.env.PORT}`);

    connectDB();

    console.log(`Server has started AT ${PORT}`);
})
