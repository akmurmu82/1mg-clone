const express = require("express");
const registerUser = require("../controllers/user/registerUser");
const loginUser = require("../controllers/user/loginUser");

const userRouter = express.Router();

// userRouter.get("/", getUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
// userRouter.patch("/update", updateUser);
// userRouter.delete("/delete", deleteUser);

module.exports = userRouter;
