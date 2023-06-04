const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { config } = require('./src/db/credentials.js');


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
  console.log("It's working");
});

app.get("/ContactUsForm", (req, res) => {
  const q = "SELECT * FROM Na_kontaktos;";
  con.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(data);
  });
});


app.post("/ContactUsForm", (req, res) => {
  const { name, email, message } = req.body;
  const q = "INSERT INTO Na_kontaktos (name, email, message) VALUES (?, ?, ?)";
  con.query(q, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(result);
  });
});

//is never used, and is called in the front but the front is never used
app.get("/CreateUserForm",(req,res)=>{
  const q="SELECT * FROM USERS;";
  con.query(q,(err,data)=>{
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
     return res.json(data);
  });
});

//is never used
app.post("/CreateUserForm", (req, res) => {
  const { emri, mbiemri, username, password, email, ditelindja } = req.body;
  const q = "INSERT INTO Users (emri, mbiemri, username, password, email, ditelindja) VALUES (?, ?, ?, ?, ?, ?)";
  con.query(q, [emri, mbiemri, username, password, email, ditelindja], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(result);
  });
});


app.get("/Users", (req, res) => {
  const { emri, mbiemri, username, password, email, ditelindja, address, city, country } = req.body;
  const sql = "SELECT * FROM USERS;";

  con.query(
    sql,
    [emri, mbiemri, username, password, email, ditelindja, address, city, country],
    (err,data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error"  });
      }
      return res.json(data);
    }
  );
});

app.post("/Users", (req, res) => {
  const { emri, mbiemri, username, password, email, ditelindja, address, city, country } = req.body;
 const sql = "INSERT INTO Users (emri, mbiemri, username, password, email, ditelindja, address, city, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  con.query(
    sql,
    [emri, mbiemri, username, password, email, ditelindja, address, city, country],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Registration failed, please try again or contact support for assistance" });
      }
      res.status(200).json({ message: "Registration successful" });
    }
  );
});

app.post("/CreateAdmin", (req, res) => {
  const { admin_username, password, email } = req.body;
  const query = "INSERT INTO Admins (admin_username, password, email) VALUES (?, ?, ?)";

  con.query(query, [admin_username, password, email], 
    (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json({ message: "Registration successful" });
  });
});



app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
