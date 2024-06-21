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
