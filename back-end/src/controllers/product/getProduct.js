const ProductModel = require("../../models/product.model");

const getProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    let product = await ProductModel.findOne({ _id });
    if (!product) res.status(404).json({ message: "Product not found!" })

    res.status(200).json({ data: product });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Something went wrong while fetching the user!",
        error,
      });
  }
};

module.exports = getProduct;
