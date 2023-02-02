const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/myError");

// worked
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await userModel.find();
  res.status(200).json({
    isDone: true,
    data: users,
    message: "successfully fetched users",
  });
});
// worked
exports.getUsersByEmail = asyncHandler(async (req, res, next) => {
  const user = await userModel.find({
    email: req.params.id,
  });
  res.status(200).json({
    isDone: true,
    data: user[0],
    message: "successfully fetched user",
  });
});
//worked
exports.createUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    res.send("already logged in");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await userModel.create(
    name !== ""
      ? {
          name: name,
          email: email,
          password: hashedPassword,
        }
      : { email: email, password: hashedPassword }
  );

  res.status(200).json({
    isDone: true,
    data: newUser,
    message: "successfully created user",
  });
});

const ACCESS_TOKEN_KEY = "secret123";

//worked
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(404).json({
      message: "email not found",
    });
  }
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(404).json({
      message: "password is incorrect",
    });
  }

  const token = jwt.sign({ user: user.email }, ACCESS_TOKEN_KEY);

  return res.status(200).json({
    isDone: true,
    token: token,
    message: "successfully logged in",
    id: user.id,
  });
});

//worked
exports.updateUserPassword = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const { id } = req.params;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(password);
  const updatedUser = await userModel.findOneAndUpdate(
    { _id: id },
    { password: hashedPassword },
    { runValidators: true }
  );
  if (updatedUser) {
    res.status(200).json({
      isDone: true,
      data: updatedUser,
      message: "successfully updated password",
    });
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
});

//worked
exports.updateUserName = asyncHandler(async (req, res, next) => {
  const updatedUser = await userModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedUser) {
    throw new MyError(404, "User not found");
  }
  res.status(200).json({
    isDone: true,
    data: updatedUser,
    message: "successfully updated name",
  });
});

// exports.deleteUser = asyncHandler(async (req, res, next) => {
//   const deletedUser = await userModel.findOneAndDelete(req.params.id);

//   if (!deletedUser) {
//     throw new MyError(404, "ID is wrong");
//   }
//   res.status(200).json({
//     isDone: true,
//     data: deletedUser,
//     message: "successfully deleted user",
//   });
// });

//worked
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      isDone: true,
      Data: deletedUser,
      message: "successfully deleted user",
    });
  } catch (err) {
    res.status(400).json({
      isDone: false,
      error: err,
    });
  }
};
