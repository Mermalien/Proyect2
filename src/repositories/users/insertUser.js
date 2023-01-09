const getDb = require("../../db/getDb");

const insertUser = async (user) => {

  try {
    const {name, email, encryptedPass} = user;

    const pool = getDb();

    const [{insertId}] = await pool.query(
        "INSERT INTO users (name, email, password, registrationCode) VALUES(?, ?, ?, ?)",
        [name, email, encryptedPass]
    );
    return insertId;

  } catch (error) {
    console.error(error.message);
  }
};
module.exports = insertUser;