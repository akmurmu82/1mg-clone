const UserModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

const fetchAllUser = async (req, res) => {
  try {
    let allUser = await UserModel.find();

    res.status(200).json({ data: allUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong while fetching users!", error });
  }
};

module.exports = fetchAllUser;
