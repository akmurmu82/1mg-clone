const ProductModel = require("../../models/product.model");

const deleteProduct = async (req, res) => {
    try {
        const { _id } = req.params;

        let isProduct = await ProductModel.findByIdAndDelete({ _id });
        if (!isProduct) {
            return res.status(404).json({ message: "Product not found!" })
        }

        res.status(204).json({ message: "Product deleted." });
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Something went wrong while deleting the product!",
                error,
            });
    }
};

module.exports = deleteProduct;
