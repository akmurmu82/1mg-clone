const ProductModel = require("../../models/product.model");

const updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const { _id } = req.params;
    let updates = {};
    if (name) updates.name = name;
    if (price) updates.price = price;
    if (description) updates.description = description;

    let updatedProduct = await ProductModel.findByIdAndUpdate(_id, updates, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found!" })
    }

    res.status(200).json({ message: "Product Updated.", data: updatedProduct });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Something went wrong while updating the product!",
        error,
      });
  }
};

module.exports = updateProduct;
