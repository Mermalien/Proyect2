const getPool = require("../../db/getDb");

const selectUserById = async (id) => {
    try {
        const pool = getPool();

        const [[user]] = await pool.query("SELECT * FROM user WHERE id = ?", [id]);
        return user;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = selectUserById;