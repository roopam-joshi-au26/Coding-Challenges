import mongoose from "mongoose";

export const init = async () => {
  await mongoose.connect(process.env.DBURL, (err) => {
    if (err) {
      console.log("Error in connecting to DB");
    } else {
      console.log("successfully connected to DB");
    }
  });
};


