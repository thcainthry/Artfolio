const express = require("express");
const mysql = require ("mysql2");
const session = require("express-session");
const path = require("path");
import LoginPage from "../../../client/src/components/Pages/LoginPage"

const { config } = require('./db/credentials');

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + {LoginPage}));
});

app.post("/auth", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (username && password) {
    connection.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password], function(error,results,fields){
        if(error) throw error;
        if(results.length > 0){
          req.session.loggedin = true;
          req.session.username = username;
          res.redirect('/home'); // redirect to home page or newly created page
      }{
        res.send('Incorrect Username and/or Password!');
      }
      res.end();
      });
  } else {
    res.send("Please enter Username and Password!");
    res.end();
  }
});

app.get("/home", (req, res) => {
  if (req.session.loggedin) {
    res.send("Welcome back, " + req.session.username + "!");
  } else {
    res.send("Please login to view this page!");
  }
  res.end();
});

app.listen(3000); 