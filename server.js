const express = require("express");
const app = express();

require("dotenv").config();

const {PORT} = process.env;

app.use(express.json());

//Aquí requerimos los controllers de los users
const {
    createUser, loginUser, activateUser
} = require("./src/controllers/users");

//Aquí requerimos los middlewares
const{
    handleError,
    handleNotFound,
    validateAuth,
} = require("./src/middlewares");

//Endpoints
app.post("/registro", createUser);
app.post("/login", loginUser);
app.get("/activate/:registrationCode", activateUser);

//Middlewares
app.use(handleNotFound);
app.use(handleError);


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});