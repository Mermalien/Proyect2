const getDb = require("../../db/getDb");

const updatePostById = async (post) => {
  const { id, title, description, url } = post;

  const pool = getDb();

  await pool.query(
    "UPDATE posts SET title = ?, description = ? , url = ? WHERE id = ?",
    [title, description, url, id]
  );
};

module.exports = updatePostById;
