const insertPost = require("./insertPost");
const selectPosts = require("./selectPosts");
const selectPostById = require("./selectPostById");
const deletePostById = require("./deletePostById");
const updatePostById = require("./updatePostById");

module.exports = {
  insertPost,
  selectPosts,
  selectPostById,
  deletePostById,
  updatePostById,
};
