const createLike = require("../../repositories/likes/createLike");
const deleteLike = require("../../repositories/likes/deleteLike");
const selectLikebyId = require("../../repositories/likes/selectLikeById");
const { selectPostById } = require("../../repositories/post");
const { postIdSchema } = require("../../schemas/posts");
const { generateError } = require("../../utils");

const togglePostLike = async (req, res, next) => {
  try {
    //
    const { idPost: postId } = req.params;

    await postIdSchema.validateAsync(req.params);

    const post = await selectPostById(postId);

    if (!post) {
      generateError("The post you are trying to like doesn't exist", 404);
    }
    // El middleware validateAuth valida al Usuario
    const loggedUserId = req.auth.id;
    // Miramos si ya hay un like en la base de datos de ese usuario
    const like = await selectLikebyId(postId, loggedUserId);

    let liked;
    let statusCode;

    if (like) {
      deleteLike(postId, loggedUserId);
      liked = false;
      statusCode = 200;
    } else {
      createLike(postId, loggedUserId);
      liked = true;
      statusCode = 201;
    }
    res.status(statusCode).send({ status: "ok", data: { liked } });
  } catch (error) {
    next(error);
  }
};
module.exports = togglePostLike;
