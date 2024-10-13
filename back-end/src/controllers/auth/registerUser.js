const UserModel = require("../../models/user.model");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: "User already registered!" });
    }

    // Encrypting the password
    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });
    newUser.save(); // Saving the user.
    res.status(201).json({ message: "User Created", data: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong while registering!", error });
  }
};

module.exports = registerUser;
