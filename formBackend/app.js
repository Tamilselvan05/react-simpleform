const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// const mModels = require("./Model/mModels");
// const mShop = require("../Model/mShop");
const mlogin = require("./model/mlogin");

app.use(cors());
app.use(bodyParser.json());

// database port save agurathu
const database =
  "mongodb+srv://codingspace:codingspacedev@cluster0.4yk93.mongodb.net/tamil";
// connecting mode
mongoose.connect(
  database,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err, succ) => {
    if (err) {
      console.log("Db not cconnected");
    } else {
      console.log("DB connected");
    }
  }
);

// server on mode
app.listen(3001, () => {
  console.log("connecting");
});

app.post("/login", function (req, res) {
  console.log(req.body);
  let user = new mlogin();

  user.email = req.body.email;
  user.password = req.body.password;

  user.save((err, docs) => {
    if (err) {
      res.status(500).send({ errData: err });
      console.log(err);
    } else {
      res.status(200).send({ docsData: docs });
      console.log(docs);
    }
  });
});
