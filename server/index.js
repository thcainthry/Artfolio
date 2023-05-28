const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./src/models");
const { Users } = require("./src/models");

app.get("/", (req, res) => {
  res.json("Hi, we are working on the backend.");
  console.log("It's working");
});

app.get("/selectUsers", (req, res) => {
  Users.findAll().then((users)=>{
    res.send(users);
  })
  .catch((err)=>{
  console.log(err);
  res.status(500).send("Internal Server Error");
});
});

app.get("/insert", (req, res) => {
  Users.create({
    emri: "Doresa",
    mbiemri: "Osmanaj",
    username: "DoresaO",
    password: "Doresapassword",
    email: "doresaosmanaj@gmail.com",
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
    email: "eriona.berisha@gmail.com",
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
    email: "florinda.hasani@gmail.com",
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
    email: "muhamed.hyseni@gmail.com",
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
    email: "murat.berisha@gmail.com",
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

app.get("/deleteUser", (req, res) => {
  Users.destroy({ where: { emri: "Doresa" } })
    .then(() => {
      res.send("User deleted");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});



db.sequelize.sync().then(() => {
  app.listen(5001, () => {
    console.log("Server is running on port 5001.");
  });
});

