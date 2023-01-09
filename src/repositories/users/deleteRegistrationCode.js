const getDb = require("../../db/getDb");

const deleteRegistrationCode = async (registrationCode) => {
    const pool = getDb();

    await pool.query(
        "UPDATE users SET registrationCode = NULL WHERE registrationCode = ?",
    [registrationCode]
    );
};

module.exports = deleteRegistrationCode;