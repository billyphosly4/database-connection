import {User } from '../models/user.js';
   // handels user requests
const registerUser = async (req , res) => {
    try {
        const {username,email,password} = req.body;
            // vallidation
        if(!username || !email || !password) {
           return res.status(400).json({message: "input all fields"
           })
        }
        // to check if user exists in the database

        const existing = await User.findOne({ email:email.toLowerCase()});
        if(existing){
            return res.status(400).json({message:"User already exists"});
        }
        
        // create user

        const user =await  User.create({
            username,
            email:email.tolowerCase(),
            password,
            loggedIn:false,
        });
        res.status.json({
            message:"User registered",
            user: {id: user._id,email:user.email,username: user.username}
        });
        
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }
};

const loginUser = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}
export {
    registerUser,
}