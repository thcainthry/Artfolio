import express from "express";
import mysql from "mysql";
import bcrypt from "bcrypt";

const app = express();

import { config } from '../db/credentials.mjs';

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const { name, surname, username, email, birthday, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    const user = {
      name,
      surname,
      username,
      email,
      birthday,
      password: hash
    };

    connection.query('INSERT INTO users SET ?', user, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
        return;
      }

      res.status(201).send('User registered successfully');
    });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
