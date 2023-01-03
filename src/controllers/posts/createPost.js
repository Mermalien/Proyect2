//const jwt = require("jsonwebtoken");
const generateError = require("../../utils/generateError");
const { insertPost } = require("../../repositories/posts");
const { createPostSchema } = require("../../schema/posts");

const createPost = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    await createPostSchema.validateAsync(req.body);

    const { title, url, descripcion } = req.body;

    if (!title || !url || !descripcion) {
      generateError("Título, Url  y descrpción son obligatorios", 400);
    }
    const insertPostId = await insertPost({
      title,
      url,
      userId,
    });

    res.status(201).send({
      status: "ok",
      data: { id: insertPostId, title, url, userId },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createPost;
