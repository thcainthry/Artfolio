
import{
    config
} from './credentials.js'

const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => { //navigates to register page, route
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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
