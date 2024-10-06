const {Schema, model, default:mongoose}  =require("mongoose");
const userSchema = new Schema({
    name: {
        type: String,
        required:"Name is required"
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    password: {
        type: String,
        required: "Password is required."
    },
})

const User = mongoose.model('User',  userSchema);
module.exports =  User;