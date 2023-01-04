const getDb = require("../../db/getDb");

const selectPostById = async (idPost) => {
  const pool = getDb();

  const [[post]] = await pool.query("SELECT * FROM posts WHERE id = ?", [
    idPost,
  ]);

  return post;
};

module.exports = selectPostById;
