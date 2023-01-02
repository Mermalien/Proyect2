const getDb = require("../../db/getDb");

const insertUser = async (user) => {

    const {name, email, encryptedPassword, registrationCode} = user;

    const pool = getDb();

    const [{insertId}] = await pool.query(
        "INSERT INTO users (name, email, password, registrationCode) VALUES(?, ?, ?, ?)",
        [name, email, encryptedPassword, registrationCode]
    );
    return insertId;
};
module.exports = insertUser;