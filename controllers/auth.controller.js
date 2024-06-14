import {comparePassword, hashPassword} from '../utils/authHelper.js';
import UserModel from "../models/user.model.js";
import JWT from 'jsonwebtoken';

//Signin
export const registerController = async (req, res) => {
  try {
    const { username, email, password, phone, address } = req.body;
    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Please enter a username",
      });
    }
    if (!email) {
      return res.status(400).json({ message: "Please enter a email" });
    }
    if(!password){
        return res.status(400).json({ message: "Please enter a password" });
    }
    if(!phone){
        return res.status(400).json({ message: "Please enter a phone number" });
    }
    if(!address){
        return res.status(400).json({ message: "Please enter a address" });
    }

    const existingUser=await UserModel.findOne({ email: email   });
    if(existingUser){  
        return  res.status(200).send({
            message: "User already exists",
            success: false,
        })
     } 


     //register user
     const hashedPassword =   await hashPassword(password)
     const user=new UserModel({ email ,username,password:hashedPassword ,address,phone}).save();
      res.status(200).send({
        message: "User registered successfully",
        success: true,
        user,
      });


  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error registering",
    });
  }
};


//Login

export const loginController = async (req, res) => {
 
         try {
          const { email, password } = req.body;
          if(!email ||  !password) {
            return res.status(401).json({
              message: "invalid  email or password",
              success: false,
            }
            
            )
          }
          const user = await UserModel.findOne({ email: email });
          const match =await comparePassword(password,user.password);
          if(!match){
          return   res.status(401).json({
              message: "invalid  password",
              success: false,
            }
            
            )

          }
                  
          
          const token=await JWT.sign({id:user.id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES_IN,
          });
          res.status(200).send({
            message: "User logged in successfully",
            success: true,
            token,
            user:{
              id:user.id,
              username:user.username,
              email:user.email,
              phone:user.phone,
              address:user.address,
              
            },
          });


          } catch (error) {
                  console.log(error);
                  return res.status(500).send({ message : "User logged in failed", error: error });
             }  
}

