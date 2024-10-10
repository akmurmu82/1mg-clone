const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

const authenticate = async (req, res, next) => {

    const reqHeaders = req.headers.authorization;
    if (!reqHeaders) return res.status(400).json({ message: "Request headers missing/malformed!" })

    const token = reqHeaders.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token is missing!" })

    const user = jwt.verify(token, jwtSecret)
    req.body.userId = user.userId;

    next()
}

module.exports = authenticate;