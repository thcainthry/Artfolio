const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { config } = require('./src/db/credentials.js');
const { Admins} = require ('./src/models/Admins.js');

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
  
  