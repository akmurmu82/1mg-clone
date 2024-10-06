const UserModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

const getUser = async (req, res) => {
  try {
    const { _id } = req.params;
    let user = await UserModel.find({ _id });

    res.status(200).json({ data: user });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Something went wrong while fetching the user!",
        error,
      });
  }
};

module.exports = getUser;
