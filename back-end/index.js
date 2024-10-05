const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const userRouter = require("./src/routes/userRoute");

const server = express();
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
// Middlewares
server.use(express.json());
server.use(cors());

// Custom Routes
server.use("/user", userRouter);

// Home Route
server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to 1mg-clone server." });
});


// Startig the server
server.listen(port, async () => {
  try {
    await connectDB(mongoUri);
    console.log(
      `Database is connected and Server is listening on port: ${port}`
    );
  } catch (error) {
    console.log(`Something went wrong while starting the server!`, error);
  }
});
