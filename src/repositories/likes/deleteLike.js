const getDb = require("../../db/getDb");
const deleteLike = async (postId, userId) => {
  const pool = getDb();
  await pool.query("DELETE FROM likes WHERE postId =? AND userId=?", [
    postId,
    userId,
  ]);
};
module.exports = deleteLike;
