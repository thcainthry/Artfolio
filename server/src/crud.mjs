import express from "express";
import mysql from "mysql";
import cors from "cors";
import { config } from './db/credentials.mjs';

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  user: config.user,
  password: config.password,
  host: config.host,
  database: config.database
});

con.connect((err) => {
  if (err) {
    console.log('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database.');
});

app.get("/", (req, res) => {
  res.json("Hi, we are working on the backend.");
});

app.get("/ContactUsForm", (req, res) => {
  const q = "SELECT * FROM Na_kontaktos;";
  con.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/ContactUsForm", (req, res) => {
  const { name, email, message } = req.body;
  const q = `INSERT INTO Na_kontaktos(name, email, message) VALUES ('${name}', '${email}', '${message}')`;
  con.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(result);
  });
});


app.post("/users", (req, res) => {
  const { emri, mbiemri, username, password, email, ditelindja } = req.body;
  
  const sql = "INSERT INTO Users (emri, mbiemri, username, password, email, ditelindja) VALUES (?, ?, ?, ?, ?, ?)";

  con.query(sql, [emri, mbiemri, username, password, email, ditelindja], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to create user" });
    }
    res.status(201).json({ message: "User created successfully", userId: result.insertId });
  });
});


app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
