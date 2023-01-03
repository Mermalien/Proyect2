const getDb = require("../../db/getDb");

const deletePostById = async (id) => {
  const pool = getDb();

  await pool.query("DELETE FROM posts WHERE id = ?", [id]);
};

module.exports = deletePostById;
