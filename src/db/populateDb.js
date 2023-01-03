require("dotenv").config();
const bcrypt = require("bcrypt");
const getDb = require("./getDb");
<<<<<<< HEAD
//Datos de prueba para la DB
const populateDb = async () => {
  try {
    const pool = getDb();
    await pool.query(`INSERT INTO users (name, email, password) VALUES ("lucia", "lucia@email.com", "${await bcrypt.hash(
      "12345678",
      10
    )}"),
        ("Marcos", "marcos@email.com", "${await bcrypt.hash(
          "12345678",
          10
        )}")`);
    console.log(`Usuarios insertados correctamente`);

    await pool.query(`INSERT INTO posts (userId, title, url, description) VALUES (1,"Consejos adiestramiento", "https://www.youtube.com/watch?v=Z5QIHkcGBxg", "Algunos consejos sobre adiestramiento de cachorros"),
        (2, "Cursos adiestramiento", "https://dalecan.com/", "Info sobre cursos de adiestramiento")`);

    await pool.query(`
        INSERT INTO likes (postId, userId) VALUES (1, 2), (2, 1)`);
    console.log("Datos insertados correctamente");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};
populateDb();
=======

//Datos de prueba para la DB

const populateDb = async () => {
    try {
        const pool = getDb();

        await pool.query(`INSERT INTO users (name, email, password) VALUES ("lucia", "lucia@email.com", "${await bcrypt.hash("12345678", 10)}"),
        ("Marcos", "marcos@email.com", "${await bcrypt.hash("12345678", 10)}")`);

        console.log(`Usuarios insertados correctamente`);

        await pool.query(`INSERT INTO posts (userId, title, url, description) VALUES (1,"Consejos adiestramiento", "https://www.youtube.com/watch?v=Z5QIHkcGBxg", "Algunos consejos sobre adiestramiento de cachorros"),
        (2, "Cursos adiestramiento", "https://dalecan.com/", "Info sobre cursos de adiestramiento")`);

        console.log(`Posts insertados correctamente`);

        await pool.query(`
        INSERT INTO likes (postId, userId) VALUES (1, 2), (2, 1)`);

        console.log('Datos insertados correctamente');

    } catch (error) {
        console.error(error.message);
    } finally{
        process.exit();
    }
};

populateDb();
>>>>>>> 58b67c190f8f3e06f8323a0c782110f08b4058fc
