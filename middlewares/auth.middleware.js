import JWT from 'jsonwebtoken';
import UserModel from '../models/user.model.js';
export const requireSignIn=async (req,res,next)=>{
try {
    const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
    req.user = decode;
    next();
} catch (error) {
    console.log(error)
}
}


export const IsAdmin=async (req, res, next)=>{
    try {
        const user =await UserModel.findById(req.user._id);
       if(user.role !==1){
        return res.status(401).send({
            message:'you are not admin' ,
            success: false
        })
       }
       else{
        next()
       }
    } catch (error) {
        return res.status( 401).send({  message : "error in Is Admin middleware" });
    }
}