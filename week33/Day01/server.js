// Dependencies
const express = require("express");
const { createConnection } = require("mysql2/promise");

// Creating the Server
const app = express();
const PORT = 5000;

// Creating the Connection to MySQL Database
let connection = null;
async function connectToDB() {
  connection = await createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "sakila",
  });
}
connectToDB();

// Dummy Route to show results of Queries
app.get("/", async (req, res) => {
  // CC Queries :

  // 1. Display the first and last names of all actors from the table actor.
  //   let sqlQueryString = `SELECT first_name,last_name FROM actor`

  /* 2. You need to find the ID (actor id) number, first name, and last name of an
        actor, of whom you know only the first name, "Joe." What is one query
        would youuse to obtain this information? */
  //   let sqlQueryString = `SELECT actor_id,first_name,last_name FROM actor WHERE first_name = "Joe"`

  // 3. Find all actors whose last name contain the letters GEN
  //    let sqlQueryString = `SELECT * FROM actor WHERE last_name LIKE "%GEN%"`;

  /* 4. Display the country_id and country columns of the following countries:
        Afghanistan, Bangladesh, and China in using a single SQL query */
  //   let sqlQueryString = `SELECT country_id,country FROM country WHERE country in ('Afghanistan', 'Bangladesh', 'China')`;

  // 5. Delete the description column in film table.
  //   let sqlQueryString = `ALTER TABLE film DROP COLUMN description;`;

  // 6. List the last names of actors, as well as how many actors have that lastname.
  let sqlQueryString = `SELECT last_name,COUNT(*) as actor_count FROM actor GROUP BY last_name`;

  let [results] = await connection.query(sqlQueryString);
  res.json(results);
});

// Starting the Server
app.listen(PORT, () => {
  console.log(`Server Running at PORT : ${PORT}`);
});
