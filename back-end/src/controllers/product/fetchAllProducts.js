const ProductModel = require("../../models/product.model");

const fetchAllProducts = async (req, res) => {
  try {
    let products = await ProductModel.find();

    res.status(200).json({ data: products });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Something went wrong while fetching the user!",
        error,
      });
  }
};

module.exports = fetchAllProducts;
