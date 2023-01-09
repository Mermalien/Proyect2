const getDb = require("../../db/getDb");
const selectLikebyId = async (postId, userId) => {
  const pool = getDb();
  const [[like]] = await pool.query(
    "SELECT * FROM likes WHERE postId=? AND userId=?",
    [postId, userId]
  );
  return like;
};
module.exports = selectLikebyId;
