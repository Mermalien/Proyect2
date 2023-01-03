const { selectPostById, updatePostById } = require("../../repositories/post");
const { generateError } = require("../../utils");
const { editPostSchema, postIdSchema } = require("../../schemas/posts");

const editPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    await postIdSchema.validateAsync(id);

    const post = await selectPostById(id);

    if (!post) {
      generateError("El post que quieres actualizar, no existe!", 404);

      const logguedUserId = req.auth.id;

      if (post.userId !== logguedUserId) {
        generateError("No tienes permiso para editar este Post", 401);
      }

      await editPostSchema.validateAsync(req.body);

      const updatedPost = { ...post, ...req.body };

      await updatePostById(updatedPost);

      res.status(200).send({ status: "ok", data: updatedPost });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = editPost;
