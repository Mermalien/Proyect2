const getDb = require("./getDb");

async function main() {
    let connection;

    try {
        connection = await getDb();

        console.log(`Conexión realizada ok`);

        await connection.query(`DROP TABLE IF EXISTS likes`);
        await connection.query(`DROP TABLE IF EXISTS posts`);
        await connection.query(`DROP TABLE IF EXISTS users`);

        console.log(`Tablas eliminadas`);
        
        await connection.query(`CREATE TABLE IF NOT EXISTS users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(200) UNIQUE NOT NULL,
            password VARCHAR(200) NOT NULL,
            biografia VARCHAR(1500),
            avatar VARCHAR(200)
        )`);

        await connection.query(`CREATE TABLE IF NOT EXISTS posts (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            userId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id),
            title VARCHAR(100) NOT NULL,
            url VARCHAR(500) NOT NULL,
            description VARCHAR(1000),
            image VARCHAR(200),
            date_creation DATETIME
        )`);

        await connection.query(`CREATE TABLE IF NOT EXISTS likes (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            userId INT UNSIGNED NOT NULL,
            postId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id),
            FOREIGN KEY (postId) REFERENCES posts(id)
        )`);

        console.log(`Tablas creadas!`);

    } catch (error) {
        console.error(error.message);
    }finally{
        if(connection){
            connection.release();
        }

        process.exit();
    }
}
main();