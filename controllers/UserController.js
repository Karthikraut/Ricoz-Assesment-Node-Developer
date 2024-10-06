const UserService = require('../services/UserService');
const userService =new UserService();

const SignUp = async(req,res)=>{
    try{
        console.log(req.body);
        const response  = await userService.signup(req.body);
        return res.status(201).json({
            message: 'Successfully created the User',
            err: {},
            data: response[0],
            success: true
        })   
    } catch(error){
        console.log("Error in User Controller Layer", error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new user'
        })
    }
}

const SignIn = async(req,res)=>{
    try{
        const response = await userService.signIn(req.body);
        return res.status(201).json({
            message: "Successfully Signed IN",
            success: true,
            data: response[0],
            err: {}
        })
    } catch(error){
        console.log("Error:- ",error);
        return res.status(500).json({
            message: "Error in Signed In",
            success: false,
            data: [],
            err: error,
        })
    }   
}

const DeleteUser = async(req,res)=>{
    try{
        const user = userService.deleteUser(req.body);
        return res.status(500).json({
            message: "User Deletion Sucessfull",
            success: true,
            data: user,
            err: [],
        })
    }catch(error){
        console.log('Error:- ',error);
        return res.status(500).json({
            message: "Error in Deleting User",
            success: false,
            data: [],
            err: error,
        })
    }
}

module.exports =  {SignIn,SignUp,DeleteUser}