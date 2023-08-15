const mongoose = require("mongoose");

const organizatonData = new mongoose.Schema({
  name: { type: String },
  buisnessEmail: { type: String },
  password: { type: String },
  address: { type: String },
  buisnessBankAccount: { type: Number },
});
const Organization = mongoose.model("Organization", organizatonData);
module.exports = Organization;