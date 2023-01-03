require("dotenv").config();
const express = require("express");
const app = express();

const { PORT } = process.env;

app.use(express.json());

//Aquí requerimos los controllers de los users
const {
<<<<<<< HEAD
  createUser,
  loginUser,
  activateUser,
=======
    createUser, loginUser, activateUser
>>>>>>> 58b67c190f8f3e06f8323a0c782110f08b4058fc
} = require("./src/controllers/users");

//Aquí requerimos los controllers de los post

const {
  createPost,
  deletePost,
  editPost,
  getPost,
} = require("./src/controllers/posts");

//Aquí requerimos los middlewares
const {
  handleError,
  handleNotFound,
  validateAuth,
} = require("./src/middlewares");

//Endpoints Users
app.post("/registro", createUser);
app.post("/login", loginUser);
app.get("/activate/:registrationCode", activateUser);

// Endpoints Post

//app.get("/posts", getPosts);
app.get("/posts/:id", getPost);
app.post("/posts", validateAuth, createPost);
app.delete("/posts/:id", validateAuth, deletePost);
app.put("/posts/:id", validateAuth, editPost);

//Middlewares
app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
