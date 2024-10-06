const express = require("express");
const registerUser = require("../controllers/auth/registerUser");
const loginUser = require("../controllers/auth/loginUser");

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

module.exports = authRouter;
