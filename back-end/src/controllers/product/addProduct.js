const ProductModel = require("../../models/product.model");

const addProduct = async (req, res) => {
    try {
        const { name, price, description, userId } = req.body;
        let existingProduct = await ProductModel.findOne({ name });
        if (existingProduct) {
            return res.status(404).json({ message: "Product already registered!" });
        }

        const newProduct = new ProductModel({
            name, price, description, userId
        });
        newProduct.save();
        res.status(201).json({ message: "Product Created", data: newProduct });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Something went wrong while registering!", error });
    }
};

module.exports = addProduct;
