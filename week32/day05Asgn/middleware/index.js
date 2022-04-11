import jwt from "jsonwebtoken";
import { __dirname } from "../app.js";
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.SECRET;

export const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(`Access token: ${token}`);
  if (!token) {
    return res.sendFile(__dirname + "/view/login.html");
  }
  try {
    const data = jwt.verify(token, SECRET, function (err, decodedData) {
      next();
    });
  } catch (err) {
    console.log(err.message);
    res.redirect(__dirname + "/view/login.html");
  }
};
