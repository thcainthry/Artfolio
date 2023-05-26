const express = require("express");
const app = express();

const db = require("./src/models");
const { Users } = require("./src/models");

app.get("/", (req, res) => {
  res.json("Hi, we are working on the backend.");
  console.log("It's working");
});

app.get("/select", (req, res) => {
  res.send("select");
});

app.get("/insert", (req, res) => {
  Users.create({
    emri: "Doresa",
    mbiemri: "Osmanaj",
    username: "DoresaO",
    password: "Doresapassword",
    email: "doresaosmanaj@gami.com",
    ditelindja: new Date("1990-01-01"),

  })
    .then(() => {
      console.log("User created successfully");
      res.send("User created successfully");
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).send("Error creating user");
    });
});

app.get("/insert1", (req, res) => {
  Users.create({
    emri: "Eriona",
    mbiemri: "Berisha",
    username: "EB",
    password: "Erionapassword",
    email: "eriona.berisha@gami.com",
    ditelindja: new Date("1990-01-01"),

  })
    .then(() => {
      console.log("User created successfully");
      res.send("User created successfully");
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).send("Error creating user");
    });

});

app.get("/insert2", (req, res) => {
  Users.create({
    emri: "Florinda",
    mbiemri: "Hasani",
    username: "FH",
    password: "Florindapassword",
    email: "florinda.hasani@gami.com",
    ditelindja: new Date("1990-01-01"),

  })
    .then(() => {
      console.log("User created successfully");
      res.send("User created successfully");
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).send("Error creating user");
    });
});

app.get("/insert3", (req, res) => {
  Users.create({
    emri: "Muhamed",
    mbiemri: "Hyseni",
    username: "MH",
    password: "Muhamedpassword",
    email: "muhamed.hyseni@gami.com",
    ditelindja: new Date("1990-01-01"),

  })
    .then(() => {
      console.log("User created successfully");
      res.send("User created successfully");
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).send("Error creating user");
    });
});

app.get("/insert4", (req, res) => {
  Users.create({
    emri: "Murat",
    mbiemri: "Berisha",
    username: "MB",
    password: "Muratpassword",
    email: "murat.berisha@gami.com",
    ditelindja: new Date("1990-01-01"),

  })
    .then(() => {
      console.log("User created successfully");
      res.send("User created successfully");
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).send("Error creating user");
    });
});

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000.");
  });
});

