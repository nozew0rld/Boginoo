const express = require("express");

const {
  createShort,
  deleteShort,
  getShort,
  getShortUrl,
  getLinkByUser,
} = require("../controller/linkController");

const linkRouter = express.Router();

linkRouter
  .post("/", createShort)
  .get("/shorts", getShort)
  .get("/:usernameId", getLinkByUser)
  .delete("/delete/:id", deleteShort)
  .get("/getUrl/:shortUrl", getShortUrl);

module.exports = linkRouter;
