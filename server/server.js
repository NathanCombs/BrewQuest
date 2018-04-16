require("dotenv").config();
var express = require("express");
var app = express();
var bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
var path = require("path");
var pg = require("pg");
var bodyParser = require("body-parser");
var conString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@baasu.db.elephantsql.com:5432/${process.env.DB_USER}`;

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

var client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  } else {
      console.log("DB connection successful");
      app.listen(process.env.PORT || 5000, () => {
          console.log(`Server started on port ${process.env.PORT || 5000}`)
      })
  }
});

app.post("/signUp" ,(req, res) => {
  console.log(req.body);
  if (req.body.username.length && req.body.password.length) {
    client.query(`INSERT INTO users (username, password) VALUES ('${req.body.username}', '${req.body.password}');`)
      .then(i => {res.json("successs")}).catch(error => {res.json(error)});
    }
})

app.post("/login", (req, res) => {
  console.log(req.body)
;  client.query(`SELECT * FROM users WHERE username='${req.body.username}' AND password='${req.body.password}'`)
    .then(i => {
      if (!i.rows.length) {
        res.status(400).send("unsuccessfull login")
      } else res.json("Onward!")
    })
    .catch(error => {res.status(500)});
})