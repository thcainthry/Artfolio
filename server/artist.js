const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { config } = require('./src/db/credentials.js');
const { Artist } = require ('./src/models/Artist.js');

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
  res.json("Hi, this is our artist biografi");
  console.log("It's working");
});

app.get("/selectArtist", (req, res) => {
  Artist.findAll()
    .then((artist) => {
      res.send(artist);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/insertArtist", (req, res) => {
  Artist.create({
    emri_artistit: "Albiona",
    mbiemri_artistit: "Berisha",
    vendi_lindjes: "Kacanik",
    biografia:
      "Unë jam një piktore që aftësitë e saj i ka pasur që në moshën gjashtë vjeçare. Që nga ajo moshë kam përmirësuar artin tim në degën e pikturës. Në vend të kësaj, unë jam dhe një adhuruese e fotografisë, të cilën e praktikoj si një mënyrë për të shprehur ndjenjat e mia përmes saj. Për mua, arti është gjuha ime e të folurit nëpërmjet imazheve.",
  })
    .then(() => {
      console.log("Artist created successfully");
      res.send("Artist created successfully");
    })
    .catch((err) => {
      console.error("Error creating artist:", err);
      res.status(500).send("Error creating artist");
    });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});

  
  