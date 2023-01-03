const { selectPostById, updatePostById } = require("../../repositories/posts");
const generateError = require("../../utils/generateError");

const editPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await selectPostById(id);

    if (!post) {
      generateError("El post que quieres actualizar, no existe!", 404);

      const logguedUserId = req.auth.id;

      if (post.userId !== logguedUserId) {
        generateError("No tienes permiso para edit este Post", 401);
      }
      const { title, url, descripcion } = req.body;

      if (!title && !url && !descripcion) {
        generateError(
          "Necesitas incluir un título, una url y una descripcion",
          400
        );
      }

      const updatedPost = { ...post, ...req.body };
      await updatePostById(updatedPost);
      res.status(200).send({ status: "ok", data: updatedPost });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = editPost;
