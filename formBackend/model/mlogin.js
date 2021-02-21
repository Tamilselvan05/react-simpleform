const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
});

userSchema.set("timestamps", true);
module.exports = mongoose.model("login", userSchema, "login");
// model  filegurathu db ku oru collection oru copy mathri collection ithan access pnum ithanu 