const getDb = require("../../db/getDb");

const selectPostById = async (postId) => {
  const pool = getDb();

  const [[post]] = await pool.query("SELECT * FROM posts WHERE id = ?", [
    postId,
  ]);

  return post;
};

module.exports = selectPostById;
