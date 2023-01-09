const insertUser = require("./insertUser");
const selectUserByEmail = require("./selectUserByEmail");
const selectUserById = require("./selectUserById");
const selectUserByCode = require("./selectUserByCode");
const deleteRegistrationCode = require("./deleteRegistrationCode");

module.exports = {insertUser, selectUserByEmail, selectUserById, selectUserByCode, deleteRegistrationCode};