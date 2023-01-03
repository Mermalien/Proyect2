const jwt = require("jsonwebtoken");
const generateError = require("../../utils/generateError");
//const { insertPost } = require("../../repositories/posts");

const createPost = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    const { title, url } = req.body;

    if (!title || !url) {
      generateError("Título y Url son obligatorios", 400);
    }
    const insertId = await insertPost({
      title,
      url,
      userId,
    });

    res.status(201).send({
      status: "ok",
      data: { id: insertId, title, url, userId },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createPost;
