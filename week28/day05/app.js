const express = require("express");
const app = express();
const https = require("https");
const axios = require('axios');
const port = 3000;

app.get("/posts", (req, res) => {
    posts = "https://jsonplaceholder.typicode.com/posts"

    https.get(posts, (response) => {
        let body = "";

        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {
            try {
                var postData = JSON.parse(body);
                // console.log(postData)
                res.send(postData)
                    // do something with JSON
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });

})


app.get("/comments", (req, res) => {
    let comments = "https://jsonplaceholder.typicode.com/comments";
    https.get(comments, (response) => {
        let body = "";

        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            try {
                commentsData = JSON.parse(body);
                // console.log(json)
                res.send(commentsData)

                // do something with JSON
            } catch (error) {
                console.error(error.message);
            };
        })
    })
});


const post = "https://jsonplaceholder.typicode.com/posts";
const comment = "https://jsonplaceholder.typicode.com/comments";

app.get("/postwithcomment", (req, res) => {
    const apiPost = await getData(post);
    const apiComment = await getData(comment);
    for (let i = 0; i < apiPost.data.length; i++) {
        for (let j = 0; j < apiComment.data.length; j++) {
            if (apiPost.data[i].id === apiComment.data[j].id)
                apiPost.data[i].coments = apiComment.data[j];
        }
    }
    res.send(apiPost.data);
})
const getData = async(url) => {
    return await axios
        .get(url)
        .then((res) => res)
        .catch((err) => {
            console.log("api errro =>>>>", err);
            return err;
        });
};


app.listen(port, () => console.log("Server is up"))