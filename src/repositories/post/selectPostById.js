const getDb = require("../../db/getDb");

const selectPostById = async (id) => {
  const pool = getDb();

  const [[post]] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);

  return post;
};

module.exports = selectPostById;
