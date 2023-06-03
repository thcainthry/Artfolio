const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

const { config } = require("../db/credentials");

const connection = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/Users", async (req, res) => {
  const { emri, mbiemri, username, password, email, ditelindja, address, city, country } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const user = {
      emri,
      mbiemri,
      username,
      password: hashedPassword,
      email,
      ditelindja,
      address,
      city,
      country,
    };

    await connection.query("INSERT INTO Users SET ?", user);

    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});

