const { Router } = require("express");
const express = require("express");

const {
  getUsers,
  getUsersByEmail,
  createUser,
  updateUserName,
  updateUserPassword,
  login,
  deleteUser,
} = require("../controller/userController");

const userRouter = express.Router();

userRouter
  .post("/createUser", createUser)
  .get("/", getUsers)
  .get("/checkEmail/:id", getUsersByEmail)
  .put("/changePassword/:id", updateUserPassword)
  .post("/login", login)
  .put("/updateUserName/:id", updateUserName)
  .delete("/deleteUser/:id", deleteUser);

module.exports = userRouter;
