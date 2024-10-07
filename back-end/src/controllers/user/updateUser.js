const UserModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { _id } = req.params;
    let updates = {};
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (password) updates.password = password;
    let updatedUser = await UserModel.findByIdAndUpdate(_id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" })
    }

    res.status(200).json({ message: "User Updated.", data: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Something went wrong while updating the user!",
        error,
      });
  }
};

module.exports = updateUser;
