const mysql = require('mysql2');
const dotenv = require('dotenv');
const chalk = require('chalk');
const keys = require('../co');//path me rregullu

// Load environment variables from .env file
dotenv.config();

const setupDB = async () => {
  try {
    // Create a connection pool
    //te dhanat me i rregullu ne baz te db
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.artfolio,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Get a connection from the pool
    const connection = await pool.promise().getConnection();

    // Check if the connection is successful
    if (connection) {
      console.log(`${chalk.green('✓')} ${chalk.blue('MySQL Connected!')}`);

      // Perform database operations here
      // ...

      // Release the connection back to the pool when done
      connection.release();
    } else {
      console.error('Failed to connect to MySQL database.');
    }
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
  }
};

module.exports = setupDB;
