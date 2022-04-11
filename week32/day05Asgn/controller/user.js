import jwt from "jsonwebtoken";
import { userModel } from "../model/userSchema.js";
import { __dirname } from "../app.js";
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.SECRET;

export const getlogin = async (req, res) => {
  res.sendFile(__dirname + "/view/login.html");
};
export const getsignup = async (req, res) => {
  res.sendFile(__dirname + "/view/signup.html");
};

export const postsignup = async (req, res) => {
  console.log(req.body);
  try {
    let adduser = await userModel.create(req.body);
    res.send(adduser);
  } catch (err) {
    res.send(err.message);
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  try {
    let isuser = await userModel.find({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(isuser);
    if (isuser[0]?.email === req.body.email) {
      const payload = { isLogged: true };
      const token = jwt.sign(payload, SECRET, {
        expiresIn: "1D",
        algorithm: "HS384",
      });
      return res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({ message: "Logged in successfully 😊 👌" });
    }
    return res.send("Credentials not Matched");
  } catch (err) {
    return res.send(err.message);
  }
};
