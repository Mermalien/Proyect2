const getDb = require("../../db/getDb");

const selectUserByEmail = async (email) => {
    const pool = getDb();

    const [[user]] = await pool.query("SELECT * FROM users WHERE email = ?", [email,]);
    
    return user;
};

module.exports = selectUserByEmail;