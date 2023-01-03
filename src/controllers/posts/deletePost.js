const generateError = require("../../utils/generateError");
const { selectPostById, deletePostById } = require("../../repositories/posts");

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await selectPostById(id);

    if (!post) {
      generateError("El Post no existe", 400);

      const loggurUserId = req.auth.id;

      if (post.userId !== loggurUserId) {
        generateError("No puedes borrar un post que no sea tuyo!", 401);
      }
      await deletePostById(id);
    }
    res
      .status(200)
      .send({ status: "ok", message: "Tu post se ha borrado correctamente" });
  } catch (error) {
    next(error);
  }
};

module.exports = deletePost;
