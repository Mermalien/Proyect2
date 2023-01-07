const getDb = require("../../db/getDb");
//const { description } = require("../../schemas/users/createUserSchema");

const insertPost = async (post) => {
  try {
    const { titulo, descripcion, url, userId } = post;

    const pool = getDb();

    const [{ insertId }] = await pool.query(
      "INSERT INTO posts (titulo, description, url, userId) VALUES (?, ?, ?, ?)",
      [titulo, descripcion, url, userId]
    );

    return insertId;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = insertPost;
