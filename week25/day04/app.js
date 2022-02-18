const axios = require("axios").default;
const express = require("express");
const app = express();

const post = "https://jsonplaceholder.typicode.com/posts";
const comment = "https://jsonplaceholder.typicode.com/comments";

app.get("/postWithComment", async (req, res) => {
  const apiPost = await getData(post);
  const apiComment = await getData(comment);

  for (let i = 0; i < apiPost.data.length; i++) {
    for (let j = 0; j < apiComment.data.length; j++) {
      if (apiPost.data[i].id === apiComment.data[j].id)
        apiPost.data[i].coments = apiComment.data[j];
    }
  }
  res.send(apiPost.data);
});

const getData = async (url) => {
  return await axios
    .get(url)
    .then((res) => res)
    .catch((err) => {
      console.log("api errro =>>>>", err);
      return err?.response;
    });
};

app.listen(8080, () => {
  console.log("server is runnig 8080");
});
