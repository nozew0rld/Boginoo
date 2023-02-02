const mongoose = require("mongoose");

const shortModel = mongoose.Schema({
  orignalLink: {
    type: String,
    required: true,
  },
  shortLink: {
    type: String,
    unique: true,
    required: true,
  },
  ownerId: String,
  registerDate: { type: Date, default: Date.now },
});

const links = mongoose.model("link", shortModel);

module.exports = links;
