const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    packageInfo: { type: String, required: true },
    delivery: { type: String },
    mrp: { type: Number },
    discountPercentage: { type: Number },
    discountedPrice: { type: Number },
    description: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
