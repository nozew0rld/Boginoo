const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connect = require("./config/DB");
const userRouter = require("./routes/userRoute");
const linkRouter = require("./routes/linkRoute");

dotenv.config({ path: "./config/config.env" });

const port = process.env.PORT;
const app = express();
connect();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/link", linkRouter);

app.listen(port, () => {
  console.log(`server is ${port} starting`);
});
