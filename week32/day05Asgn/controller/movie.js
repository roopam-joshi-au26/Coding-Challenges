import { movieModel } from "../model/movieSchema.js";

export const addMovie = async (req, res) => {
  const movieData = req.body;
  console.log(movieData);
  try {
    //Add to my db
    const addResult = await movieModel.create(movieData);
    res.send(addResult);
  } catch (err) {
    res.status(500).json({
      errObj: err.message,
    });
  }
};

export const getAllMovie = async (req, res) => {
  try {
    //Get Data from DB
    const movieData = await movieModel.find({});
    res.send(movieData);
  } catch (err) {
    res.status(500).json({
      errObj: err,
    });
  }
};
export const getMovieById = async (req, res) => {
  const { movieId } = req.params;
  try {
    //Get Data by Id from DB
    const movieData = await movieModel.findById(movieId);

    if (!movieData) {
      return res.status(404).send({
        message: "Movie Not found",
      });
    }
    res.send(movieData);
  } catch (err) {
    res.status(500).json({
      errObj: err.message,
    });
  }
};

export const updateMovie = async (req, res) => {
  const updateMovieData = req.body;
  const { movieId } = req.params;

  try {
    //Update to my db
    const updateResult = await movieModel.findByIdAndUpdate(
      movieId,
      updateMovieData
    );
    const movieData = await movieModel.findById(movieId);
    res.send(movieData);
  } catch (err) {
    res.status(500).json({
      errObj: err,
    });
  }
};
export const deleteMovie = async (req, res) => {
  const { movieId } = req.params;
  try {
    //Delete to my db
    const updateResult = await movieModel.findByIdAndDelete(movieId);
    res.status(200).json({ deleteResult: updateResult });
  } catch (err) {
    res.status(500).json({
      errObj: err,
    });
  }
};



