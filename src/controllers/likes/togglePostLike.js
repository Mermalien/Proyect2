const togglePostLike = async (req, res, next) => {
  try {
    // Recogemos de los params el id del post que se quiere likear
    const { id: postId } = req.params;
    // Validamos el id de los params para ver si cumple los requisitos establecidos en el postIdSchema
    await postIdSchema.validateAsync(postId);
    // Seleccionamos el post con dicho id de la base de datos
    const post = await selectPostById(postId);
    // Si no existe, lanzamos un error
    if (!post) {
      generateError("The post you are trying to like doesn't exist", 404);
    }
    // El middleware validateAuth se encarga de crear una propiedad "auth" en la req, que contiene un objeto con toda la información que hay guardada en el token del usuario. Recogemos el id del usuario logueado acceciendo a req.auth.id
    const loggedUserId = req.auth.id;
    // Buscamos si ya hay un like en la DB del usuario logueado al post
    const like = await selectLikeByPostAndUser(postId, loggedUserId);
    // Este controller va alternando entre crear like / quitar like. Si quita un like queremos responder al cliente con el código 200 y decirle que el post ya no tiene like del usuario (liked = false), pero si crea un like, queremos responder con el código 201 e indicar que el post tiene un like del usuario (liked = true). Esto lo hacemos para facilitarle las cosas al frontend
    let liked;
    let statusCode;
    // Si ya hay un like, borramos el like, ponemos liked como false ya que el post ya no está likeado y asignamos el código 200. Si no, creamos el like, ponemos liked como true y el código 201
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
