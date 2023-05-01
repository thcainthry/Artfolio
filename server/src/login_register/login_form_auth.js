
import{
    config
} from './credentials.js'

const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();ioioiioioioiioioioiioi
const port = 5000;

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

app.use(express.urlencoded({ extended: true }));

// Authenticate user
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Query the user from the database
  connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
    if (error) throw error;

    // If user with the provided username exists
    if (results.length > 0) {
      const user = results[0];

      // Compare the provided password with the hashed password from the database
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;

        if (result) {
          // Passwords match, authentication successful
          res.send('Authentication successful!');
        } else {
          // Passwords don't match, authentication failed
          res.send('Incorrect password!');
        }
      });
    } else {
      // User with the provided username doesn't exist
      res.send('User not found!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
