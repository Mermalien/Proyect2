const togglePostLike = async (req, res, next) => {
  try {
    //
    const { id: postId } = req.params;
    
    await postIdSchema.validateAsync(postId);
    
    const post = await selectPostById(postId);
    
    if (!post) {
      generateError("The post you are trying to like doesn't exist", 404);
    }
    // El middleware validateAuth valida al Usuario
    const loggedUserId = req.auth.id;
    // Miramos si ya hay un like en la base de datos de ese usuario
    const like = await selectLikeByPostAndUser(postId, loggedUserId);
   
    let liked;
    let statusCode;
    
    if (like) {
      deleteLike(postId, loggedUserId);
      liked = false;
      statusCode = 200;
    } else {
      insertLike(postId, loggedUserId);
      liked = true;
      statusCode = 201;
    }
    res.status(statusCode).send({ status: "ok", data: { liked } });
  } catch (error) {
    next(error);
  }
};
module.exports = togglePostLike;
