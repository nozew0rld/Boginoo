const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// const uri = "mongodb://localhost:27017/";
const uri = process.env.MONGODB_URL;

console.log(uri);

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nozewolrd:20051223bataa@cluster0.peqxcnp.mongodb.net/boginoo?retryWrites=true&w=majority"
    );
    console.log("MongoDB is successfully connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
