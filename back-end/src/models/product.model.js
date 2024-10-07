const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number },
    description: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
