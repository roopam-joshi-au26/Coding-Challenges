import express from "express";
const router = express.Router();
import { getlogin, getsignup, postsignup, login } from "../controller/user.js";
import { authorization } from "../middleware/index.js";
import {addMovie,getAllMovie,getMovieById,updateMovie,deleteMovie,} from "../controller/movie.js";

router.get("/login", getlogin);
router.get("/signup", getsignup);

router.post("/login", login);
router.post("/signup", postsignup);

router.route("/getallmovie").get(authorization, getAllMovie);
router.route("/addmovie").post(authorization, addMovie);
router.route("/getmoviebyid/:movieId").get(authorization, getMovieById);
router.route("/updatemovie/:movieId").put(authorization, updateMovie);
router.route("/deletemovie/:movieId").delete(authorization, deleteMovie);

router.get("*", (req, res) => {
  res.status(404).send("Route NOT FOUND");
});

export { router };


