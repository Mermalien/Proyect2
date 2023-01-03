const { selectPosts } = require("../../repositories/posts");
const { filterPostsSchema } = require("../../schemas/posts");

const getPosts = async (req, res, next) => {
  try {
    await filterPostsSchema.validateAsync(req.query);

    const posts = await selectPosts(req.query);
    res.status(200).send({ status: "ok", data: posts });
  } catch (error) {
    next(error);
  }
};

module.exports = getPosts;
