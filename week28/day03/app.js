const express = require("express");
const { v4 } = require("uuid");
const fs = require("fs");
let user = require("./user.json");
const { use } = require("express/lib/application");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/userinfo", (req, res) => {
  let { userName, age } = req.body;

  const isUserName = user.filter((user) => user.userName == userName);

  if (isUserName.length) {
    res.send("userName already exist");
    return;
  }

  user.push({
    id: v4(),
    userName: userName,
    age: age,
  });

  fs.writeFile("user.json", JSON.stringify(user), (error) => {
    if (error) {
      error;
    }
  });
  res.send("user added seccessfully");
});

// return all the user

app.get("/userinfo", (req, res) => {
  let username = req.query.username;
  let age = req.query.age;
  let id = req.query.id;

  if (username && age) {
    const isUserName = user.filter((user) => {
      if (user.userName == username && user.age == age) return user;
    });

    if (isUserName.length) {
      res.json({ isUserName });
      return;
    }
    res.json({ user: "user not found" });
  }

  //   username
  if (username) {
    const isUserName = user.filter((user) => user.userName == username);
    if (isUserName.length) {
      res.json(isUserName);
      return;
    }
    res.json({ username: "given username user not found" });
  }

  //   age
  if (age) {
    const isAge = user.filter((user) => user.age == age);
    if (isAge.length) {
      res.json(isAge);
      return;
    }
    res.json({ age: "given age user is not found" });

    return;
  }

  //   id
  if (id) {
    const isId = user.filter((user) => user.id == id);
    res.json(isId);
    return;
  }

  res.json(user);
});

app.listen(3002, () => {
  console.log("server is runnig on port 302");
});
