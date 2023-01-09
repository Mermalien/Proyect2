const getDb = require("../../db/getDb");

const selectPosts = async (queryParams) => {
  const pool = getDb();
};

module.exports = selectPosts;
