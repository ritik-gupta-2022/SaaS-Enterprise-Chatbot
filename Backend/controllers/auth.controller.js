import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    name === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    // console.log(newUser);
    await newUser.save();
    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET_KEY
    );
    const { password: pass, ...rest } = newUser._doc;
    res
      .status(201)
      .cookie("access_token", token, {
        // httpOnly: true,//to prevent access from javascript(commented to access in frontend)
        path: "/",
        sameSite: "None",
        // httpOnly: true,//to prevent access from javascript(commented to access in frontend)
        httpOnly: true,
        secure: true, // Enable secure only in production
        path: "/",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({ message: "Signup successful", user: newUser });
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(password)
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email }).select("+password");

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET_KEY
    );
    // console.log(token)

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        // httpOnly: true,//to prevent access from javascript(commented to access in frontend)
        path: "/",
        sameSite: "None",
        // httpOnly: true,//to prevent access from javascript(commented to access in frontend)
        //   httpOnly: true,
        //   secure:true, // Enable secure only in production
        //   path: '/',
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json(rest);
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User has been signed out");
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    // console.log(req.user)
    const user = await User.findById(req.user.id).select("-password");
    // console.log(user);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
