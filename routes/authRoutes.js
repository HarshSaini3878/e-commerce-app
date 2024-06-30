import express, { Router } from 'express';
import {registerController,loginController, forgotPasswordController} from '../controllers/auth.controller.js'
import {  IsAdmin, requireSignIn } from "../middlewares/auth.middleware.js"
const router=express.Router();


router.post('/register',registerController);


router.post('/login',loginController);


//Forgot Password
router.post('/forgot-password',forgotPasswordController)
//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

  //protected Admin route
router.get("/admin-auth", requireSignIn,IsAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default router;