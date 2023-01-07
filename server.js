require("dotenv").config();
const express = require("express");
const app = express();

const { PORT } = process.env;

app.use(express.json());

//Aquí requerimos los controllers de los users
const {
  activateUser,
  createUser,
  loginUser,
} = require("./src/controllers/users");

//Aquí requerimos los controllers de los post

const {
  createPost,
  deletePost,
  editPost,
  getPost,
} = require("./src/controllers/posts");

// Aqui requerimos los controllers de los likes

const { togglePostLike } = require("./src/controllers/likes");

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
app.get("/posts/:idPost", getPost);
app.post("/new/:userId", validateAuth, createPost);
app.delete("/posts/:idPost", validateAuth, deletePost);
app.post("/like:idPost", validateAuth, togglePostLike);

//Middlewares
app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
