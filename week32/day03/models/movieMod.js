const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const fs = require('fs/promises');

// Defining Schema !
const movieSchema = new mongoose.Schema({
  "title": Schema.Types.String,
  "year": Schema.Types.Number,
  "runtime": Schema.Types.Number,
  "released": Schema.Types.Date,
  "poster": Schema.Types.String,
  "plot": Schema.Types.String,
  "fullplot": Schema.Types.String,
  "lastupdated": Schema.Types.String,
  "type": Schema.Types.String,
  "directors": [Schema.Types.String],
  "imdb": {
    "rating": Schema.Types.Number,
    "votes": Schema.Types.Number,
    "id": Schema.Types.Number,
  },
  "cast": [Schema.Types.String],
  "countries": [Schema.Types.String],
  "genres": [Schema.Types.String],
  "tomatoes": {
    "viewer": {
      "rating": Schema.Types.Number,
      "numReviews": Schema.Types.Number
    },
    "lastUpdated": Schema.Types.Date
  },
  "num_mflix_comments": Schema.Types.Number
})


// Mongoose Middlewares
movieSchema.pre("aggregate", function(){
  console.log("pre middlware");
  // console.log(this);
  this.startTime = Date.now()
})

movieSchema.post("aggregate",function(){
  console.log("post middleware");
  let totalTime = Date.now() - this.startTime
  let queryTime = `Time taken for query :${totalTime} MS. `
  queryTime += "\n";

  console.log("Time require for find operation :",totalTime,"MS");
  fs.appendFile('queryTime.txt',queryTime,"utf-8",(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("Added Data Succesfully !!");
    }
  })
  // console.log(this);
})


const MovieModel = mongoose.model('Movie', movieSchema)

// Exporting MovieModel !
module.exports = MovieModel