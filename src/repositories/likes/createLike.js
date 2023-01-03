const getDb = require("../../db/getDb");
const createLike = async (postId, userId) => {
  const get = getDb();
  const [{ insertId }] = await pool.query(
    "INSERT INTO likes (postID,userID) VALUES (?,?)",
    [postId, userId]
  );
};
module.exports = createLike;
