const express = require("express");
const fetchAllUser = require("../controllers/user/fetchAllUser");
const getUser = require("../controllers/user/getUser");
const updateUser = require("../controllers/user/updateUser");
const deleteUser = require("../controllers/user/deleteUser");

const userRouter = express.Router();

userRouter.get("/", fetchAllUser);
userRouter.get("/:_id", getUser);
userRouter.patch("/update/:_id", updateUser);
userRouter.delete("/delete/:_id", deleteUser);

module.exports = userRouter;
