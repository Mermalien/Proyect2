const { selectPostById } = require("../../repositories/post");
const { postIdSchema } = require("../../schemas/posts");
const { generateError } = require("../../utils");

const getPost = async (req, res, next) => {
  try {
    const { idPost } = req.params;

    await postIdSchema.validateAsync(idPost);

    const post = await selectPostById(idPost);

    if (!post) {
      generateError("El Post no existe", 404);
    }
    res.status(200).send({ status: "ok", data: post });
  } catch (error) {
    next(error);
  }
};

module.exports = getPost;
