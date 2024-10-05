const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  password: {
    type: String,
    validate: function (value) {
      return value.length >= 8;
    },
    message: "Password must be 8 letters long!",
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
