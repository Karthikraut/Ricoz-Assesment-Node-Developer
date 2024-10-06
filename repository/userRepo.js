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

    async deleteUser(userId) {
        try {
            const delUser = await User.findByIdAndDelete(userId);
            return delUser;
        } catch (error) {
            console.log("Error at User Repository Layer: ", error);
            throw error;
        }
    }
}

module.exports = UserRepository;
