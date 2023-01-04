require("dotenv").config();
const bcrypt = require("bcrypt");
const getDb = require("./getDb");

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

    await pool.query(`INSERT INTO posts (title, url, description, userId) 
    VALUES ("Consejos adiestramiento", "https://www.youtube.com/watch?v=Z5QIHkcGBxg", "descripcion del post", 1),
        ("Cursos adiestramiento", "https://dalecan.com/", "descripcion del post", 2)`);

    console.log(`Posts insertados correctamente`);

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
