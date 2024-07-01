import { comparePassword, hashPassword } from "../utils/authHelper.js";
import UserModel from "../models/user.model.js";
import JWT from "jsonwebtoken";
import userModel from "../models/user.model.js";

//Signin
export const registerController = async (req, res) => {
  try {
    const { username, email, password, phone, address, answer } = req.body;
    
    if (!username) {
      return res.status(400).json({ success: false, message: "Please enter a username" });
    }
    if (!email) {
      return res.status(400).json({ success: false, message: "Please enter an email" });
    }
    if (!password) {
      return res.status(400).json({ success: false, message: "Please enter a password" });
    }
    if (!phone) {
      return res.status(400).json({ success: false, message: "Please enter a phone number" });
    }
    if (!address) {
      return res.status(400).json({ success: false, message: "Please enter an address" });
    }
    if (!answer) {
      return res.status(400).json({ success: false, message: "Please enter an answer" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ success: false, message: "User already exists" });
    }

    // Register user
    const hashedPassword = await hashPassword(password);
    const user = await new UserModel({
      email,
      username,
      password: hashedPassword,
      address,
      phone,
      answer
    }).save();
    
    return res.status(200).json({ success: true, message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Error registering", error });
  }
};

//Login

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role:user.role
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Login failed", error });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }
    if (!answer) {
      return res.status(400).json({ success: false, message: "Answer is required" });
    }
    if (!newPassword) {
      return res.status(400).json({ success: false, message: "New password is required" });
    }

    const user = await UserModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).json({ success: false, message: "Wrong email or answer" });
    }

    const hashedPassword = await hashPassword(newPassword);
    await UserModel.findByIdAndUpdate(user._id, { password: hashedPassword });

    return res.status(200).json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Something went wrong", error });
  }
};

export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await userModel.findById(req.user._id);
    //password
    if (password && password.length < 6) {
      return res.json({ error: "Passsword is required and 6 character long" });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};

export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};
//orders
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};

//order status
export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing Order",
      error,
    });
  }
};