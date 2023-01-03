const getDb = require("../../db/getDb");

const insertPost = async (post) => {
  const { titulo, descripcion, url, userId } = post;

  const pool = getDb();

  const [{ insertId }] = await pool.query(
    "INSERT INTO posts (titulo, descripcion, url, userId) VALUES (?, ?, ?, ?)",
    [titulo, descripcion, url, userId]
  );

  return insertId;
};

module.exports = insertPost;
