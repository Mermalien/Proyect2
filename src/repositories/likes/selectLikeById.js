const getDb = require("../../db/getDb");
const selectLikebyId = async (postId, userId) => {
  const get = getDb();
  const [[like]] = await Pool.query(
    "SELECT * FROM likes WHERE postId=? AND userId=?",
    [postId, userId]
  );
  return like;
};
module.exports = selectLikebyId;
