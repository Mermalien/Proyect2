const getDb = require("../../db/getDb");

const deletePostById = async (idPost) => {
  const pool = getDb();

  await pool.query("DELETE FROM posts WHERE id = ?", [idPost]);
};

module.exports = deletePostById;
