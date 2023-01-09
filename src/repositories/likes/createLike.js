const getDb = require("../../db/getDb");

const createLike = async (postId, userId) => {
  const pool = getDb();
  const [{ insertId }] = await pool.query(
    "INSERT INTO likes (postID,userID) VALUES (?,?)",
    [postId, userId]
  );

  return insertId;
};
module.exports = createLike;
