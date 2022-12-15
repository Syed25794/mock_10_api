const express = require("express");
const cors = require("cors");

const connection = require("./config/database");
const userRouter = require("./routes/userRoutes.routes");

const app = express();

require("dotenv").config();

app.use(cors())


app.use(express.json());

app.use("/user",userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page.");
});

const LOCALHOST_PORT = process.env.LOCALHOST_PORT || 8000

app.listen(LOCALHOST_PORT, async () => {
  try {
    await connection;
    console.log("Connected");
    console.log(`Server is runnning on the localhost port : ${LOCALHOST_PORT}`);
  } catch (err) {
    console.log(err);
    console.log("Something went wrong in connecting with database.");
  }
});
