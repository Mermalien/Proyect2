const jwt = require("jsonwebtoken");
const { generateError } = require("../utils");

const validateAuth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      generateError("Missing authorization header", 400);
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer" || !token) {
      generateError("Invalid token format", 400);
    }

    const tokenPayLoad = jwt.verify(token, process.env.JWT_SECRET);

    req.auth = tokenPayLoad;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateAuth;
