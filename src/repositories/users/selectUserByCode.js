const getDb = require("../../db/getDb");

const selectUserByCode = async (registrationCode) => {
    const pool = getDb();

    const [[user]] = await pool.query("SELECT * FROM users WHERE registrationCode = ?", [registrationCode]);
    return user;
};

module.exports = selectUserByCode;