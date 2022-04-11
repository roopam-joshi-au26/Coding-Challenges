import mongoose from "mongoose";
import { body } from "express-validator";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    max: 10,
    min: 3,
  },
  lastname: {
    type: String,
    required: true,
    max: 10,
    min: 3,
  },
  dob: {
    type: Date,
    required: true,
    max: new Date(2004 - 1 - 1),
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 3,
    max: 10,
  },
});

export const userModel = mongoose.model("user", userSchema);


