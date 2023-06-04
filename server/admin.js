const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./src/models");
const { Admins } = require("./src/models");

app.get("/", (req, res) => {
  res.json("Hi, we are working on the backend.");
  console.log("It's working");
});
  
app.get("/selectAdmins", (req, res) => {
    Admins.findAll().then((admins)=>{
      res.send(admins);
    })
    .catch((err)=>{
    console.log(err);
    res.status(500).send("Internal Server Error");
  });
  });
  
  app.get("/insertAdmin", (req, res) => {
    Admins.create({
      admin_username: "Albiona",
      password: "Berisha",
      email: "albiona@admin.com",
  
    })
      .then(() => {
        console.log("Admin created successfully");
        res.send("Admin created successfully");
      })
      .catch((err) => {
        console.error("Error creating admin:", err);
        res.status(500).send("Error creating admin");
      });
  });
  
  app.get("/insertAdmin1", (req, res) => {
    Admins.create({
      admin_username: "Doresa",
      password: "Osmanaj",
      email: "doresa@admin.com",
  
    })
      .then(() => {
        console.log("Admin created successfully");
        res.send("Admin created successfully");
      })
      .catch((err) => {
        console.error("Error creating admin:", err);
        res.status(500).send("Error creating admin");
      });
  });
  
  app.get("/insertAdmin2", (req, res) => {
    Admins.create({
      admin_username: "Eriona",
      password: "Berisha",
      email: "eriona@admin.com",
  
    })
      .then(() => {
        console.log("Admin created successfully");
        res.send("Admin created successfully");
      })
      .catch((err) => {
        console.error("Error creating admin:", err);
        res.status(500).send("Error creating admin");
      });
  });
  app.get("/insertAdmin3", (req, res) => {
    Admins.create({
      admin_username: "Florinda",
      password: "Hasani",
      email: "florinda@admin.com",
  
    })
      .then(() => {
        console.log("Admin created successfully");
        res.send("Admin created successfully");
      })
      .catch((err) => {
        console.error("Error creating admin:", err);
        res.status(500).send("Error creating admin");
      });
  });
  app.get("/insertAdmin4", (req, res) => {
    Admins.create({
      admin_username: "Muhamed",
      password: "Hyseni",
      email: "muhamed@admin.com",
  
    })
      .then(() => {
        console.log("Admin created successfully");
        res.send("Admin created successfully");
      })
      .catch((err) => {
        console.error("Error creating admin:", err);
        res.status(500).send("Error creating admin");
      });
  });
  app.get("/insertAdmin5", (req, res) => {
    Admins.create({
      admin_username: "Murat",
      password: "Berisha",
      email: "murat@admin.com",
  
    })
      .then(() => {
        console.log("Admin created successfully");
        res.send("Admin created successfully");
      })
      .catch((err) => {
        console.error("Error creating admin:", err);
        res.status(500).send("Error creating admin");
      });
  });
  
  app.get("/insertAdmin6", (req, res) => {
    Admins.create({
      admin_username: "Admin",
      password: "admin",
      email: "admin@admin.com",
  
    })
      .then(() => {
        console.log("Admin created successfully");
        res.send("Admin created successfully");
      })
      .catch((err) => {
        console.error("Error creating admin:", err);
        res.status(500).send("Error creating admin");
      });
  });
  
  app.get("/deleteAdmin/:id", (req, res) => {
    const adminId = req.params.id;
  
    Admins.destroy({ where: { id: adminId } })
      .then(() => {
        res.send("Admin deleted");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
  });

  
  
  app.listen(5000, () => {
    console.log("Server is running on port 5000.");
  });
  
  