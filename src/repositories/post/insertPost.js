const getDb = require("../../db/getDb");

const insertPost = async (post) => {
  try {
    const { title, description, url, userId } = post;

    const pool = getDb();

    const [{ insertId }] = await pool.query(
      "INSERT INTO posts (title, description, url, userId) VALUES (?, ?, ?, ?)",
      [title, description, url, userId]
    );

    return insertId;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = insertPost;
