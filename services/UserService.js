const UserRepository = require("../repository/userRepo");
const bcrypt = require("bcrypt");
require('dotenv').config();

class UserService{
    constructor(){
        this.userRepository =new UserRepository();
    }

    async signup(data){
        try{
            const salt_rounds = parseInt(process.env.SALT_ROUNDS);
            const salt = await bcrypt.genSaltSync(salt_rounds);
            const hash =await bcrypt.hashSync(data.password, salt);
            const newUser = new this.userRepository.createUser({name:data.name, email:data.email, password:hash});
            return newUser
        } catch(error){
            console.log('Error:- ',error);
        }
    }

    async signIn(data){
        try{
         
            const user = await this.userRepository.findUser({email: data.email});
            
            if(user.length == 0 ){
        
                throw new error("NO USER FOUND");
                
            }
           
            const hash = user[0].password;
            const plainPassword =  data.password;

            const result = await this.comparePassword(plainPassword,hash);
            if(result==true){
                console.log("USER: ", user);
                return user;
            }
            else{
                throw error ("Password is incorrect");
            }
        } catch(error){
            console.log("Error Occured at User Service Layer, ", error);
        }

    }

    async deleteUser(data){
        try{
            const user = this.userRepository.deleteUser({email: data.email});
            return user;
        } catch(error){
            console.log("Error at Service layer: ",error);
        }
    }

    async comparePassword(plainPassword,hash){
        try{
            const result = await bcrypt.compare(plainPassword, hash);
                if (result) {
                    console.log("Password match!");
                    return true;
                } else {
                    console.log("Password does not match!");
                    return false;
                }
                
        } catch(error){
            console.log("ERROR While comparing Password. ",error);
        }
    }

}
module.exports =UserService;