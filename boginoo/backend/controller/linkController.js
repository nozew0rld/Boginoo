const linkModel = require("../models/linkModel");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/MyError");

exports.getShort = asyncHandler(async (req, res, next) => {
  const shorts = await linkModel.find().sort({ registerDate: -1 });

  res.status(200).json({
    isDone: true,
    data: shorts,
    message: "successfully fetched info",
  });
});

exports.createShort = asyncHandler(async (req, res, next) => {
  let stringId = (Math.random() + 1).toString(36).substring(7);

  const createdShort = await linkModel.create({
    orignalLink: req.body.orignalLink,
    shortLink: stringId,
    ownerId: req.body.ownerId,
  });
  res.status(200).json({
    isDone: true,
    data: createdShort,
    message: "successfully created short link",
  });
});

exports.deleteShort = asyncHandler(async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedShort = await linkModel.findByIdAndDelete(id);
    res.status(200).json({
      data: deletedShort,
      message: "successfully deleted short link",
    });
  } catch (error) {
    res.status(404).json(error.message);
  }
});

exports.getShortUrl = asyncHandler(async (req, res, next) => {
  const url = await linkModel.findOne({ shortLink: req.params.shortUrl });
  res.status(200).json({
    isDone: true,
    data: url,
    message: "successfully fetched info",
  });
});

exports.getLinkByUser = asyncHandler(async (req, res, next) => {
  const { usernameId } = req.params;
  const links = await linkModel.findOne({ ownerId: usernameId });
  res.status(200).json({ links });
});

exports.getPost = (req, res) => {
  try {
    const user = Data.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
