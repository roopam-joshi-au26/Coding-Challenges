const express = require("express");
const axios = require("axios");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
let commentDiv= ``;

app.get("/post/:id", async (req, res) => {
  let id=req.params.id
  let post = await axios(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).catch(function (error) {
    // handle error
    console.log(error);
  });

  let com = await axios(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(function (response) {
      // handle success
      for (let i = 0; i < response.data.length; i++) {
       commentDiv=commentDiv +
          `<div style="box-shadow: 11px 15px 17px -5px rgba(0,0,0,0.54);
         -webkit-box-shadow: 11px 15px 17px -5px rgba(0,0,0,0.54);
         -moz-box-shadow: 11px 15px 17px -5px rgba(0,0,0,0.54);margin-top:50px;width:100%;height:150px;
         border: 6px solid rgba(159,164,164,0.35);padding:10px;">
         <h3 style="font-weight:bold;">${response.data[i].name}</h3>
         <h4 style="font-weight:bold;">${response.data[i].email}</h4>
         ${response.data[i].body}
         </div>`;
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  
    res.send(`<main style="margin-left:5%;margin-right:5%;">
    <lable style="color:#76FCFC;font-size:20px;">Post Title</lable>
    <p style="font-size:15px;font-weight: bold">${post.data.title}</p>
    <lable style="color:#76FCFC;font-size:20px;"> Post Body</lable>
    <p style="font-size:15px;"> ${post.data.body} </p> 
    <lable style="color:#76FCFC;font-size:20px;">Comments</lable>
    <hr>${commentDiv} </main>`);
});
