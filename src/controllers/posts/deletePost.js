const { selectPostById, deletePostById } = require("../../repositories/post");
const { postIdSchema } = require("../../schemas/posts");
const generateError = require("../../utils");

const deletePost = async (req, res, next) => {
  try {
    const { idPost } = req.params;

    await postIdSchema.validateAsync(req.params);

    const post = await selectPostById(idPost);

    if (!post) {
      generateError("El Post no existe", 404);
    }

    const loggurUserId = req.auth.id;

    if (post.userId !== loggurUserId) {
      generateError("No puedes borrar un post que no sea tuyo!", 401);
    }

    await deletePostById(idPost);
    res
      .status(200)
      .send({ status: "ok", message: "Tu post se ha borrado correctamente" });
  } catch (error) {
    next(error);
  }
};

module.exports = deletePost;
