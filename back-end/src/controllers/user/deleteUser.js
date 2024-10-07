const UserModel = require("../../models/user.model");

const deleteUser = async (req, res) => {
    try {
        const { _id } = req.params;
        let updates = {};

        let isUser = await UserModel.findByIdAndDelete({ _id });
        if (!isUser) {
            return res.status(404).json({ message: "User not found!" })
        }

        res.status(200).json({ message: "User deleted." });
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Something went wrong while deleting the user!",
                error,
            });
    }
};

module.exports = deleteUser;
