const User = require("../models/user");

class UserRepository {

    async createUser(data) {
        try {
            const newUser = new User({ name: data.name, email: data.email, password: data.password });
            const user = await newUser.save();
            return user;
        } catch (error) {
            console.log("Error in repository layer: ", error);
            throw error;  // Re-throw or handle the error appropriately
        }
    }

    async findUser(data) {
        try {
            const user = await User.find({ email: data.email });
            if (user.length === 0) {
                console.log("User Not found!!");
            } else {
                return user;
            }
        } catch (error) {
            console.log("Error in repository layer: ", error);
            throw error;
        }
    }

    async deleteUser(data) {
        try {
            const delUser = await User.deleteOne({email: data.email});
            return delUser;
        } catch (error) {
            console.log("Error at User Repository Layer: ", error);
            throw error;
        }
    }

    async updatUser(data){
        try{
            const user =await User.findOneAndUpdate({email: data.email},{
                name: data.name,
                password: data.password
            },{new: true})
            console.log("Updated USER: ",user)
            return user;
        } catch(error){
            console.log("Error:- ",error);
        }
    }

}

module.exports = UserRepository;
