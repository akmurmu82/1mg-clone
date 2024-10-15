const UserModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not registered!" });
    }

    // Decrypting the password
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(403).json({ message: "Wrong password!" });
    }

    const token = jwt.sign({ userId: existingUser._id }, jwtSecret);

    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong while registering!", error });
  }
};

module.exports = loginUser;
