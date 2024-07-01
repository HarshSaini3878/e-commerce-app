import express, { Router } from 'express';
import {  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,} from '../controllers/auth.controller.js'
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
  router.put("/profile", requireSignIn, updateProfileController);


  router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, IsAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  IsAdmin,
  orderStatusController
);
export default router;